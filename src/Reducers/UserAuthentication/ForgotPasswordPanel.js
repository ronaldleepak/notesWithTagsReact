import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from 'Util/Constants';
import {
    FORGOT_PASSWORD_START,
    FORGOT_PASSWORD_SUCCESS,
    SUBMIT_NEW_PASSWORD_START,
    SUBMIT_NEW_PASSWORD_SUCCESS,
} from 'Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    loadingStatus: IDLE,
};

const forgotPasswordPanel = handleActions({
    [FORGOT_PASSWORD_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [FORGOT_PASSWORD_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
    }),
    [SUBMIT_NEW_PASSWORD_START]: (state, { payload }) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [SUBMIT_NEW_PASSWORD_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
    }),
}, initialState);

export default forgotPasswordPanel;
