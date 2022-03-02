import { handleActions } from 'redux-actions';
import {
    NEW_NOTE,
    DELETE_NOTE,
} from '../Actions'
import { createNote, deleteNoteFromList } from '../Models/Note'

const initialState = [];

const notes = handleActions({
    [NEW_NOTE]: (state, { payload }) => {
        return [...state, createNote()];
    },
    [DELETE_NOTE]: (state, { payload }) => {
        return deleteNoteFromList(state, payload.noteID);
    }
}, initialState);

export default notes;
