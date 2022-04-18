import { handleActions } from 'redux-actions';
import { LOADING_STATUS } from '../Util/Constants';
import {
    APP_START_SUCCESS,
    APP_START_FAILURE,
} from '../Actions'

const {
    LOADING,
    IDLE,
} = LOADING_STATUS;

const initialState = {
    loadingStatus: IDLE,
};

const startAppProgress = handleActions({
    [APP_START_SUCCESS]: (state) => ({
        ...state,
        loadingStatus: LOADING,
    }),
    [APP_START_FAILURE]: (state) => ({
        ...state,
        loadingStatus: IDLE,
    }),
}, initialState);

export default startAppProgress;
