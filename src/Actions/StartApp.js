
import { createAction } from "redux-actions";
import { fetchUserData } from '.'

const APP_START_SUCCESS = 'APP_START_SUCCESS';
const APP_START_FAILURE = 'APP_START_FAILURE';

const appStartSuccess = createAction(APP_START_SUCCESS);
const appStartFailure = createAction(APP_START_FAILURE);

const startApp = () => async (dispatch, getState) => {
    try {
        await dispatch(fetchUserData())
    } catch (error) {
        dispatch(appStartFailure())
        return;
    }

    dispatch(appStartSuccess())
}

export {
    APP_START_SUCCESS,
    APP_START_FAILURE,
}
export default startApp;

