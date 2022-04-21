import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from 'Util/Constants';
import {
    SIGNOUT_START,
    SIGNOUT_SUCCESS,
    FETCH_CURRENT_USER_START,
    FETCH_CURRENT_USER_SUCCESS,
} from 'Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    user: null,
    loadingStatus: IDLE,
};

const userAuth = handleActions({
    [SIGNOUT_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [SIGNOUT_SUCCESS]: (state) => ({
        ...state,
        user: null,
        loadingStatus: IDLE,
    }),
    [FETCH_CURRENT_USER_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [FETCH_CURRENT_USER_SUCCESS]: (state, { payload }) => ({
        ...state,
        user: payload,
        loadingStatus: IDLE,
    }),
}, initialState);

export default userAuth;
