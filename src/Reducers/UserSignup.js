import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from '../Util/Constants';
import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    CANCEL_CONFIRM_START,
    CANCEL_CONFIRM_SUCCESS,
    CANCEL_CONFIRM_FAILURE,
    CONFIRM_SIGNUP_START,
    CONFIRM_SIGNUP_SUCCESS,
    CONFIRM_SIGNUP_FAILURE,
    CONFIRM_RESEND_START,
    CONFIRM_RESEND_SUCCESS,
    CONFIRM_RESEND_FAILURE,
} from '../Actions'

const {
    LOADING,
    ERROR,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    user: null,
    loadingStatus: IDLE,
    error: null,
};

const userSignup = handleActions({
    [SIGNUP_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [SIGNUP_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: null,
    }),
    [SIGNUP_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: ERROR,
        error: payload,
    }),
    [CANCEL_CONFIRM_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [CANCEL_CONFIRM_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: null,
    }),
    [CANCEL_CONFIRM_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: ERROR,
        error: payload,
    }),
    [CONFIRM_SIGNUP_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [CONFIRM_SIGNUP_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: null,
    }),
    [CONFIRM_SIGNUP_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: ERROR,
        error: payload,
    }),
    [CONFIRM_RESEND_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [CONFIRM_RESEND_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: null,
    }),
    [CONFIRM_RESEND_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: ERROR,
        error: payload,
    }),
}, initialState);

export default userSignup;
