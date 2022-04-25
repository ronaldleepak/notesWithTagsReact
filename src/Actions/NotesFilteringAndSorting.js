import { createAction } from "redux-actions";
import { addComponentError } from ".";

const UPDATE_FILTERING_CRITERIA_START = 'UPDATE_FILTERING_CRITERIA_START';
const UPDATE_FILTERING_CRITERIA_SUCCESS = 'UPDATE_FILTERING_CRITERIA_SUCCESS';
const UPDATE_SORTING_CRITERIA_START = 'UPDATE_SORTING_CRITERIA_START';
const UPDATE_SORTING_CRITERIA_SUCCESS = 'UPDATE_SORTING_CRITERIA_SUCCESS';

const updateFilteringCriteriaStart = createAction(UPDATE_FILTERING_CRITERIA_START);
const updateFilteringCriteriaSuccess = createAction(UPDATE_FILTERING_CRITERIA_SUCCESS);
const updateSortingCriteriaStart = createAction(UPDATE_SORTING_CRITERIA_START);
const updateSortingCriteriaSuccess = createAction(UPDATE_SORTING_CRITERIA_SUCCESS);

const updateCriteriaForFiltering = (textForFiltering) => async (dispatch, getState) => {
    dispatch(updateFilteringCriteriaStart())

    try {
        dispatch(updateFilteringCriteriaSuccess(textForFiltering))
    } catch (error) {
        const errorMessage = `Failed to update filtering criteria: ${error.message.toString()}`;
        dispatch(addComponentError("updateCriteriaForFiltering", errorMessage))
    }
}

const updateCriteriaForSorting = (criteriaForSorting) => async (dispatch, getState) => {
    dispatch(updateSortingCriteriaStart())

    try {
        dispatch(updateSortingCriteriaSuccess(criteriaForSorting))
    } catch (error) {
        const errorMessage = `Failed to update sorting criteria: ${error.message.toString()}`;
        dispatch(addComponentError("updateCriteriaForSorting", errorMessage))
    }
}

export {
    UPDATE_FILTERING_CRITERIA_START,
    UPDATE_FILTERING_CRITERIA_SUCCESS,
    UPDATE_SORTING_CRITERIA_START,
    UPDATE_SORTING_CRITERIA_SUCCESS,
}
export {
    updateCriteriaForFiltering,
    updateCriteriaForSorting,
}
