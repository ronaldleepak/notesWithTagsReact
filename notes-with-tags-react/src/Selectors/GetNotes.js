import { createSelector } from 'reselect'

const selectNote = (state) => state.note.notes;

export const getNotes = createSelector(selectNote, (notes) => {
    // this will be filtering logic

    return notes;
})
