import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from 'Util/Constants';
import {
    FETCH_USER_DATA_START,
    FETCH_USER_DATA_DONE,
} from 'Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    loadingStatus: IDLE,
};

const fetchUserDataProgress = handleActions({
    [FETCH_USER_DATA_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [FETCH_USER_DATA_DONE]: (state) => ({
        ...state,
        loadingStatus: IDLE,
    }),
}, initialState);

export default fetchUserDataProgress;
