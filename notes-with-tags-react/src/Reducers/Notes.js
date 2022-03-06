import { handleActions } from 'redux-actions';
import {
    NEW_NOTE,
    SAVE_NOTE,
    DELETE_NOTE,
} from '../Actions'
import { createNote, deleteNoteFromList } from '../Models/Note'

const initialState = [];

const notes = handleActions({
    [NEW_NOTE]: (state, { payload }) => {
        return [createNote(), ...state];
    },
    [SAVE_NOTE]: (state, { payload }) => {
        return state;
    }, 
    [DELETE_NOTE]: (state, { payload }) => {
        return deleteNoteFromList(state, payload);
    }
}, initialState);

export default notes;
