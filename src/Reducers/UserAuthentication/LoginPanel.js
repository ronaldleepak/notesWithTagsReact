import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from 'Util/Constants';
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_CONFIRM_USER,
} from 'Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    loadingStatus: IDLE,
    isUserConfirmed: null,
};

const loginPanel = handleActions({
    [LOGIN_START]: (state) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [LOGIN_SUCCESS]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        isUserConfirmed: true,
    }),
    [LOGIN_CONFIRM_USER]: (state, { payload }) => ({
        ...state,
        loadingStatus: IDLE,
        isUserConfirmed: false,
    }),
}, initialState);

export default loginPanel;
