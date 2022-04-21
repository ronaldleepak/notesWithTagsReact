import { createSelector } from 'reselect'

const selectNotes = (state) => state.notesWithTagsPanel.notes;
const criteriaForFiltering = (state) => state.notesFilteringAndSortingCriteria.criteriaForFiltering;
const criteriaForSorting = (state) => state.notesFilteringAndSortingCriteria.criteriaForSorting;

export const getNotes = createSelector(selectNotes, (notes) => {
    // this will be filtering logic

    return notes;
})
