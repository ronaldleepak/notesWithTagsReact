import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from 'Util/Constants';
import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    CONFIRM_SIGNUP_START,
    CONFIRM_SIGNUP_SUCCESS,
    RESEND_CONFIRMATION_START,
    RESEND_CONFIRMATION_SUCCESS,
} from 'Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    loadingStatus: IDLE,
};

const signUpPanel = handleActions({
    [SIGNUP_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [SIGNUP_SUCCESS]: (state, { payload }) => ({
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
    [RESEND_CONFIRMATION_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [RESEND_CONFIRMATION_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
    }),
}, initialState);

export default signUpPanel;
