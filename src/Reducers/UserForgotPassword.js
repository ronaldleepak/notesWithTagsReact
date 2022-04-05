import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from '../Util/Constants';
import {
    FORGOT_PASSWORD_START,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    FORGOT_PASSWORD_SUBMIT_START,
    FORGOT_PASSWORD_SUBMIT_SUCCESS,
    FORGOT_PASSWORD_SUBMIT_FAILURE,
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
    [FORGOT_PASSWORD_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [FORGOT_PASSWORD_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: null,
    }),
    [FORGOT_PASSWORD_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: ERROR,
        error: payload,
    }),
    [FORGOT_PASSWORD_SUBMIT_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
        error: null,
    }),
    [FORGOT_PASSWORD_SUBMIT_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: null,
    }),
    [FORGOT_PASSWORD_SUBMIT_FAILURE]: (state, { payload }) => ({
        ...state,
        loadingStatus: ERROR,
        error: payload,
    }),
}, initialState);

export default userSignup;
