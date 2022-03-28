
import { createAction } from "redux-actions";
import _ from 'lodash-es'
import { exportNotesAsNTWFile } from '../Util/Util.js'

const EXPORT_NOTES_START = 'EXPORT_NOTES_START';
const EXPORT_NOTES_SUCCESS = 'EXPORT_NOTES_SUCCESS';
const EXPORT_NOTES_FAILURE = 'EXPORT_NOTES_FAILURE';

const exportStart = createAction(EXPORT_NOTES_START);
const exportSuccess = createAction(EXPORT_NOTES_SUCCESS);
const exportFailure = createAction(EXPORT_NOTES_FAILURE);

function simplifyNotesObj(notes) {
    return _.map(notes, (note) => {
        const simplifiedNote = _.omit(note, ['id', 'owner', 'createdAt', 'updatedAt'])

        // simplify tag list
        simplifiedNote.tags = _.map(note.tags.items, (tagObj) => {
            const simplifiedTag = _.omit(tagObj.tag, ['id', 'owner', 'createdAt', 'updatedAt']);
            return simplifiedTag;
        });

        return simplifiedNote;
    })
}

const exportNotes = () => async (dispatch, getState) => {
    dispatch(exportStart)

    try {
        const notes = simplifyNotesObj(getState().note.notes);
        
        exportNotesAsNTWFile(notes)

        dispatch(exportSuccess())
    } catch (error) {
        const errorMessage = `Failed to export notes: ${error.toString()}`;
        console.log(error)

        dispatch(exportFailure(errorMessage))
    }
}

export {
    EXPORT_NOTES_START,
    EXPORT_NOTES_SUCCESS,
    EXPORT_NOTES_FAILURE,
}
export default exportNotes;

