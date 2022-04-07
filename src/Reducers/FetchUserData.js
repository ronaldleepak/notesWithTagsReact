import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from '../Util/Constants';
import {
    FETCH_USER_START,
    FETCH_USER_DONE,
} from '../Actions'

const {
    LOADING,
    IDLE,
    ERROR,
} = LOADING_STATUS;

const initialState = {
    loadingStatus: IDLE,
    error: null,
};

const fetchUserData = handleActions({
    [FETCH_USER_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [FETCH_USER_DONE]: (state) => ({
        ...state,
        loadingStatus: IDLE,
        error: null,
    }),
}, initialState);

export default fetchUserData;
