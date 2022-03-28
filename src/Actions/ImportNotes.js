
import { createAction } from "redux-actions";

const IMPORT_NOTES_START = 'IMPORT_NOTES_START';
const IMPORT_NOTES_SUCCESS = 'IMPORT_NOTES_SUCCESS';
const IMPORT_NOTES_FAILURE = 'IMPORT_NOTES_FAILURE';

const importStart = createAction(IMPORT_NOTES_START);
const importSuccess = createAction(IMPORT_NOTES_SUCCESS);
const importFailure = createAction(IMPORT_NOTES_FAILURE);

const importNotes = () => async (dispatch, getState) => {
    
}

export {
    IMPORT_NOTES_START,
    IMPORT_NOTES_SUCCESS,
    IMPORT_NOTES_FAILURE,
}
export default importNotes;

