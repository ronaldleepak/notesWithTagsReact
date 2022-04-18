import { createSelector } from 'reselect'

const selectNote = (state) => state.notesWithTagsPanel.notes;

export const getNotes = createSelector(selectNote, (notes) => {
    // this will be filtering logic

    return notes;
})
