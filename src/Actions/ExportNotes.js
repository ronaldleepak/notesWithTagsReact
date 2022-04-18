
import { createAction } from "redux-actions";
import _ from 'lodash-es'
import { exportNotesAsJSONFile } from '../Util/Util.js'
import { addComponentError } from ".";

const EXPORT_NOTES_START = 'EXPORT_NOTES_START';
const EXPORT_NOTES_SUCCESS = 'EXPORT_NOTES_SUCCESS';

const exportStart = createAction(EXPORT_NOTES_START);
const exportSuccess = createAction(EXPORT_NOTES_SUCCESS);

function simplifyNotesObj(noteObj) {
    const notes = noteObj.notes;
    const simplifiedNotes = _.map(notes, (note) => {
        const simplifiedNote = _.omit(note, ['id', 'owner', 'createdAt', 'updatedAt'])

        // simplify tag list
        simplifiedNote.tags = _.map(note.tags.items, (tagObj) => {
            const simplifiedTag = _.omit(tagObj.tag, ['id', 'owner', 'createdAt', 'updatedAt']);
            return simplifiedTag;
        });

        return simplifiedNote;
    })

    return {
        notes: simplifiedNotes
    }
}

const exportNotes = () => async (dispatch, getState) => {
    dispatch(exportStart)

    try {
        const notes = simplifyNotesObj(getState().note);
        
        exportNotesAsJSONFile(notes)

        dispatch(exportSuccess())
    } catch (error) {
        const errorMessage = `Failed to export notes: ${error.toString()}`;
        console.log(error)

        dispatch(addComponentError("importExport", errorMessage))
    }
}

export {
    EXPORT_NOTES_START,
    EXPORT_NOTES_SUCCESS,
}
export default exportNotes;

