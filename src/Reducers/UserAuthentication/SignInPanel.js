import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from 'Util/Constants';
import {
    SIGNIN_START,
    SIGNIN_SUCCESS,
    SIGNIN_SUCCESS_UNCONFIRMED_USER,
    SIGNOUT_UNCONFIRMED_USER,
} from 'Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    loadingStatus: IDLE,
    isUserUnconfirmed: false,
};

const signInPanel = handleActions({
    [SIGNIN_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [SIGNIN_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        isUserUnconfirmed: false,
    }),
    [SIGNIN_SUCCESS_UNCONFIRMED_USER]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        isUserUnconfirmed: true,
    }),
    [SIGNOUT_UNCONFIRMED_USER]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        isUserUnconfirmed: false,
    })
}, initialState);

export default signInPanel;
