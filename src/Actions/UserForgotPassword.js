import { createAction } from "redux-actions";
import { Auth } from 'aws-amplify'
import { fetchUserData } from "."

const FORGOT_PASSWORD_START = 'FORGOT_PASSWORD_START';
const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
const FORGOT_PASSWORD_SUBMIT_START = 'FORGOT_PASSWORD_SUBMIT_START';
const FORGOT_PASSWORD_SUBMIT_SUCCESS = 'FORGOT_PASSWORD_SUBMIT_SUCCESS';
const FORGOT_PASSWORD_SUBMIT_FAILURE = 'FORGOT_PASSWORD_SUBMIT_FAILURE';

const forgotPasswordStart = createAction(FORGOT_PASSWORD_START);
const forgotPasswordSuccess = createAction(FORGOT_PASSWORD_SUCCESS);
const forgotPasswordFailure = createAction(FORGOT_PASSWORD_FAILURE);
const forgotPasswordSubmitStart = createAction(FORGOT_PASSWORD_SUBMIT_START);
const forgotPasswordSubmitSuccess = createAction(FORGOT_PASSWORD_SUBMIT_SUCCESS);
const forgotPasswordSubmitFailure = createAction(FORGOT_PASSWORD_SUBMIT_FAILURE);

const forgotPassword = (username) => async (dispatch, getState) => {
    dispatch(forgotPasswordStart())

    try {
        await Auth.forgotPassword(username);

        dispatch(forgotPasswordSuccess())
    } catch (error) {
        const errorMessage = `Failed to send forgot password code: ${error.message.toString()}`;
        console.log(error)

        dispatch(forgotPasswordFailure(errorMessage))
    }
}

const forgotPasswordNewPasswordSubmit = (username, code, newPassword) => async (dispatch, getState) => {
    dispatch(forgotPasswordSubmitStart())

    try {
        await Auth.forgotPasswordSubmit(username, code, newPassword);

        dispatch(forgotPasswordSubmitSuccess())
    } catch (error) {
        const errorMessage = `Failed to update new password: ${error.message.toString()}`;
        console.log(error)

        dispatch(forgotPasswordSubmitFailure(errorMessage))
    }
}

export {
    FORGOT_PASSWORD_START,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    FORGOT_PASSWORD_SUBMIT_START,
    FORGOT_PASSWORD_SUBMIT_SUCCESS,
    FORGOT_PASSWORD_SUBMIT_FAILURE,
}
export {
    forgotPassword,
    forgotPasswordNewPasswordSubmit,
}
