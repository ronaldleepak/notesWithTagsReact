import { createSlice } from '@reduxjs/toolkit'
import { createNote, deleteNoteFromList } from '../Models/Note'

export const notesSlice = createSlice({
    name: 'notes',
    initialState: [
        createNote(),
        createNote()
    ],
    reducers: {
        newNote: state => {
            console.log(state)
            return {
                ...state,
                notes: [createNote(), ...state.notes],
            }
        },
        deleteNote: (state, action) => {
            var {notes} = state;
            var newNotes = deleteNoteFromList(notes, action.noteID);
            return {
                ...state,
                notes: [...newNotes],
            }
        },
    }
})

export const { newNote, deleteNote } = notesSlice.actions

export default notesSlice.reducer
