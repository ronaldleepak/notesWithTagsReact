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
    IDLE,
} = LOADING_STATUS;

const initialState = {
    user: null,
    loadingStatus: IDLE,
    confirmUser: null,
    error: null,
};

const userSignup = handleActions({
    [FORGOT_PASSWORD_START]: (state, { payload }) => ({
        ...state,
    }),
    [FORGOT_PASSWORD_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        error: null,
    }),
    [FORGOT_PASSWORD_FAILURE]: (state, { payload }) => ({
        ...state,
    }),
    [FORGOT_PASSWORD_SUBMIT_START]: (state, { payload }) => ({
        ...state,
    }),
    [FORGOT_PASSWORD_SUBMIT_SUCCESS]: (state, { payload }) => ({
        ...state,
    }),
    [FORGOT_PASSWORD_SUBMIT_FAILURE]: (state, { payload }) => ({
        ...state,
    }),
}, initialState);

export default userSignup;
