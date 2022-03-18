import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from '../Util/Constants';
import {
    FETCH_NOTE_LIST_START,
    FETCH_NOTE_LIST_SUCCESS,
    FETCH_NOTE_LIST_FAILURE,
    NEW_NOTE_START,
    NEW_NOTE_SUCCESS,
    NEW_NOTE_FAILURE,
    SAVE_NOTE_START,
    SAVE_NOTE_SUCCESS,
    SAVE_NOTE_FAILURE,
    DELETE_NOTE_START,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_FAILURE,
} from '../Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    notes: [],
    loadingStatus: IDLE,
    error: null,
};

const note = handleActions({
    [FETCH_NOTE_LIST_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [FETCH_NOTE_LIST_SUCCESS]: (state, { payload }) => {
        return {
            ...state,
            notes: payload,
            loadingStatus: IDLE,
            error: null,
        }
    },
    [FETCH_NOTE_LIST_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: payload,
    }),
    [NEW_NOTE_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [NEW_NOTE_SUCCESS]: (state, { payload }) => {
        const { notes } = state;
        return {
            ...state,
            notes: [
                {
                    ...payload,
                    isNew: true,
                },
                ...notes,
            ],
            loadingStatus: IDLE,
            error: null,
        }
    },
    [NEW_NOTE_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: payload,
    }),
    [SAVE_NOTE_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [SAVE_NOTE_SUCCESS]: (state, { payload }) => {
        const updatedNote = payload;
        const notes = state.notes.map((element) => 
            element.id === updatedNote.id ? updatedNote : element
        );

        return {
            ...state,
            notes,
            loadingStatus: IDLE,
            error: null,
        }
    },
    [SAVE_NOTE_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: payload,
    }),
    [DELETE_NOTE_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [DELETE_NOTE_SUCCESS]: (state, { payload }) => {
        const deletedNote = payload;
        const notes = state.notes.filter( note => note.id !== deletedNote.id )
        
        return {
            ...state,
            notes,
            loadingStatus: IDLE,
            error: null,
        }
    },
    [DELETE_NOTE_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: payload,
    }),
}, initialState);

export default note;
