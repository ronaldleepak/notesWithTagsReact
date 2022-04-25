import { handleActions } from 'redux-actions';
import { LOADING_STATUS, SORTING_CRITERIA } from 'Util/Constants';
import {
    UPDATE_FILTERING_CRITERIA_START,
    UPDATE_FILTERING_CRITERIA_SUCCESS,
    UPDATE_SORTING_CRITERIA_START,
    UPDATE_SORTING_CRITERIA_SUCCESS,
} from 'Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const {
    CREATED_AT,
    UPDATED_AT,
    HEADER,
} = SORTING_CRITERIA;

const initialState = {
    loadingStatus: IDLE,
    criteriaForFiltering: "",
    criteriaForSorting: UPDATED_AT,
};

const notesFilteringAndSortingCriteria = handleActions({
    [UPDATE_FILTERING_CRITERIA_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [UPDATE_FILTERING_CRITERIA_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        criteriaForFiltering: payload,
    }),
    [UPDATE_SORTING_CRITERIA_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [UPDATE_SORTING_CRITERIA_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        criteriaForSorting: payload,
    }),
}, initialState);

export default notesFilteringAndSortingCriteria;
