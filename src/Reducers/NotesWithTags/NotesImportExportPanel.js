import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from 'Util/Constants';
import {
    IMPORT_NOTES_START,
    IMPORT_NOTES_SUCCESS,
    EXPORT_NOTES_START,
    EXPORT_NOTES_SUCCESS,
} from 'Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    loadingStatus: IDLE,
};

const notesImportExportPanel = handleActions({
    [IMPORT_NOTES_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [IMPORT_NOTES_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
    }),
    [EXPORT_NOTES_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [EXPORT_NOTES_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
    }),
}, initialState);

export default notesImportExportPanel;
