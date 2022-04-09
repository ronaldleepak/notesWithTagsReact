import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from '../Util/Constants';
import {
    FETCH_USER_START,
    FETCH_USER_DONE,
} from '../Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    loadingStatus: IDLE,
};

const fetchUserData = handleActions({
    [FETCH_USER_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [FETCH_USER_DONE]: (state) => ({
        ...state,
        loadingStatus: IDLE,
    }),
}, initialState);

export default fetchUserData;
