
import { createAction } from "redux-actions";
import { exportNotesAsNTWFile } from '../Util/Util.js'

const EXPORT_NOTES_START = 'EXPORT_NOTES_START';
const EXPORT_NOTES_SUCCESS = 'EXPORT_NOTES_SUCCESS';
const EXPORT_NOTES_FAILURE = 'EXPORT_NOTES_FAILURE';

const exportStart = createAction(EXPORT_NOTES_START);
const exportSuccess = createAction(EXPORT_NOTES_SUCCESS);
const exportFailure = createAction(EXPORT_NOTES_FAILURE);

const exportNotes = () => async (dispatch, getState) => {
    
}

export {
    EXPORT_NOTES_START,
    EXPORT_NOTES_SUCCESS,
    EXPORT_NOTES_FAILURE,
}
export default exportNotes;

