import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from '../Util/Constants';
import {
    FETCH_NOTE_LIST_START,
    FETCH_NOTE_LIST_SUCCESS,
    FETCH_NOTE_LIST_FAILURE,
    FETCH_TAG_LIST_START,
    FETCH_TAG_LIST_SUCCESS,
    FETCH_TAG_LIST_FAILURE,
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
    ERROR,
} = LOADING_STATUS;

const initialState = {
    notes: [],
    tags: [],
    loadingStatus: IDLE,
    error: null,
};

const note = handleActions({
    [FETCH_NOTE_LIST_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [FETCH_NOTE_LIST_SUCCESS]: (state, { payload }) => ({
        ...state,
        notes: payload,
        loadingStatus: IDLE,
        error: null,
    }),
    [FETCH_NOTE_LIST_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: ERROR,
        error: payload,
    }),
    [FETCH_TAG_LIST_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [FETCH_TAG_LIST_SUCCESS]: (state, { payload }) => ({
        ...state,
        tags: payload,
        loadingStatus: IDLE,
        error: null,
    }),
    [FETCH_TAG_LIST_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: ERROR,
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
        loadingStatus: ERROR,
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
        loadingStatus: ERROR,
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
        loadingStatus: ERROR,
        error: payload,
    }),
}, initialState);

export default note;
