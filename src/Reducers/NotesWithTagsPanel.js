import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from '../Util/Constants';
import {
    FETCH_NOTES_START,
    FETCH_NOTES_SUCCESS,
    FETCH_TAGS_START,
    FETCH_TAGS_SUCCESS,
    NEW_NOTE_START,
    NEW_NOTE_SUCCESS,
    SAVE_NOTE_START,
    SAVE_NOTE_SUCCESS,
    DELETE_NOTE_START,
    DELETE_NOTE_SUCCESS,
} from '../Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    notes: [],
    tags: [],
    loadingStatus: IDLE,
};

const notesWithTagsPanel = handleActions({
    [FETCH_NOTES_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [FETCH_NOTES_SUCCESS]: (state, { payload }) => ({
        ...state,
        notes: payload,
        loadingStatus: IDLE,
    }),
    [FETCH_TAGS_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [FETCH_TAGS_SUCCESS]: (state, { payload }) => ({
        ...state,
        tags: payload,
        loadingStatus: IDLE,
    }),
    [NEW_NOTE_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
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
        }
    },
    [SAVE_NOTE_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
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
        }
    },
    [DELETE_NOTE_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [DELETE_NOTE_SUCCESS]: (state, { payload }) => {
        const deletedNote = payload;
        const notes = state.notes.filter( note => note.id !== deletedNote.id )
        
        return {
            ...state,
            notes,
            loadingStatus: IDLE,
        }
    },
}, initialState);

export default notesWithTagsPanel;
