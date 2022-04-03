import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from '../Util/Constants';
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    FETCH_CURRENT_USER_START,
    FETCH_CURRENT_USER_SUCCESS,
    FETCH_CURRENT_USER_FAILURE,
} from '../Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    user: null,
    loadingStatus: IDLE,
    error: null,
};

const userAuth = handleActions({
    [LOGIN_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [LOGIN_SUCCESS]: (state, { payload }) => {
        return {
            ...state,
            loadingStatus: IDLE,
            error: null,
        }
    },
    [LOGIN_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: payload,
    }),
    [LOGOUT_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [LOGOUT_SUCCESS]: (state) => {
        return {
            ...state,
            user: null,
            loadingStatus: IDLE,
            error: null,
        }
    },
    [LOGOUT_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: payload,
    }),
    [FETCH_CURRENT_USER_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [FETCH_CURRENT_USER_SUCCESS]: (state, { payload }) => {
        return {
            ...state,
            user: payload,
            loadingStatus: IDLE,
            error: null,
        }
    },
    [FETCH_CURRENT_USER_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: payload,
    }),
}, initialState);

export default userAuth;
