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
    }),
    [SIGNUP_SUCCESS]: (state, { payload }) => ({
        ...state,
    }),
    [SIGNUP_FAILURE]: (state, { payload }) => ({
        ...state,
    }),
    [CANCEL_CONFIRM_START]: (state, { payload }) => ({
        ...state,
    }),
    [CANCEL_CONFIRM_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: null,
    }),
    [CANCEL_CONFIRM_FAILURE]: (state, { payload }) => ({
        ...state,
    }),
    [CONFIRM_SIGNUP_START]: (state, { payload }) => ({
        ...state,
    }),
    [CONFIRM_SIGNUP_SUCCESS]: (state, { payload }) => ({
        ...state,
    }),
    [CONFIRM_SIGNUP_FAILURE]: (state, { payload }) => ({
        ...state,
    }),
    [CONFIRM_RESEND_START]: (state, { payload }) => ({
        ...state,
    }),
    [CONFIRM_RESEND_SUCCESS]: (state, { payload }) => ({
        ...state,
    }),
    [CONFIRM_RESEND_FAILURE]: (state, { payload }) => ({
        ...state,
    }),
}, initialState);

export default userSignup;
