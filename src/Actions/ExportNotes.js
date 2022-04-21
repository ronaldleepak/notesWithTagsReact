
import { createAction } from "redux-actions";
import {
    exportNotesAsJSONFile,
    simplifyNotesWithTagsObject
} from 'Util/Util.js'
import { addComponentError } from ".";

const EXPORT_NOTES_START = 'EXPORT_NOTES_START';
const EXPORT_NOTES_SUCCESS = 'EXPORT_NOTES_SUCCESS';

const exportStart = createAction(EXPORT_NOTES_START);
const exportSuccess = createAction(EXPORT_NOTES_SUCCESS);

const exportNotes = () => async (dispatch, getState) => {
    dispatch(exportStart)

    try {
        const notes = simplifyNotesWithTagsObject(getState().note);
        
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

