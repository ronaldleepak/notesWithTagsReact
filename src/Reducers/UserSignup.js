import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from '../Util/Constants';
import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    CANCEL_CONFIRM_START,
    CANCEL_CONFIRM_SUCCESS,
    CONFIRM_SIGNUP_START,
    CONFIRM_SIGNUP_SUCCESS,
    CONFIRM_RESEND_START,
    CONFIRM_RESEND_SUCCESS,
} from '../Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    loadingStatus: IDLE,
};

const userSignup = handleActions({
    [SIGNUP_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [SIGNUP_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
    }),
    [CANCEL_CONFIRM_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [CANCEL_CONFIRM_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
    }),
    [CONFIRM_SIGNUP_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [CONFIRM_SIGNUP_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
    }),
    [CONFIRM_RESEND_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [CONFIRM_RESEND_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
    }),
}, initialState);

export default userSignup;
