import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from '../Util/Constants';
import {
    FORGOT_PASSWORD_START,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_SUBMIT_START,
    FORGOT_PASSWORD_SUBMIT_SUCCESS,
} from '../Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    loadingStatus: IDLE,
};

const userSignup = handleActions({
    [FORGOT_PASSWORD_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [FORGOT_PASSWORD_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
    }),
    [FORGOT_PASSWORD_SUBMIT_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [FORGOT_PASSWORD_SUBMIT_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
    }),
}, initialState);

export default userSignup;
