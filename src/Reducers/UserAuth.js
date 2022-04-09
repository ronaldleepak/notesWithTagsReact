import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from '../Util/Constants';
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_CONFIRM_USER,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    FETCH_CURRENT_USER_START,
    FETCH_CURRENT_USER_SUCCESS,
} from '../Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    user: null,
    loadingStatus: IDLE,
    confirmUser: null,
};

const userAuth = handleActions({
    [LOGIN_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
        confirmUser: null,
    }),
    [LOGIN_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
    }),
    [LOGIN_CONFIRM_USER]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        confirmUser: payload,
    }),
    [LOGOUT_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [LOGOUT_SUCCESS]: (state) => ({
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
