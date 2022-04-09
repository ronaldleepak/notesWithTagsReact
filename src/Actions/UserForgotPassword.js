import { createAction } from "redux-actions";
import { Auth } from 'aws-amplify'
import { updateError } from ".";

const FORGOT_PASSWORD_START = 'FORGOT_PASSWORD_START';
const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
const FORGOT_PASSWORD_SUBMIT_START = 'FORGOT_PASSWORD_SUBMIT_START';
const FORGOT_PASSWORD_SUBMIT_SUCCESS = 'FORGOT_PASSWORD_SUBMIT_SUCCESS';

const forgotPasswordStart = createAction(FORGOT_PASSWORD_START);
const forgotPasswordSuccess = createAction(FORGOT_PASSWORD_SUCCESS);
const forgotPasswordSubmitStart = createAction(FORGOT_PASSWORD_SUBMIT_START);
const forgotPasswordSubmitSuccess = createAction(FORGOT_PASSWORD_SUBMIT_SUCCESS);

const forgotPassword = (username) => async (dispatch, getState) => {
    dispatch(forgotPasswordStart())

    try {
        await Auth.forgotPassword(username);

        dispatch(forgotPasswordSuccess())
    } catch (error) {
        const errorMessage = `Failed to send forgot password code: ${error.message.toString()}`;
        dispatch(updateError("forgotPassword", errorMessage))
    }
}

const forgotPasswordNewPasswordSubmit = (username, code, newPassword) => async (dispatch, getState) => {
    dispatch(forgotPasswordSubmitStart())

    try {
        await Auth.forgotPasswordSubmit(username, code, newPassword);

        dispatch(forgotPasswordSubmitSuccess())
    } catch (error) {
        const errorMessage = `Failed to update new password: ${error.message.toString()}`;
        dispatch(updateError("forgotPassword", errorMessage))
    }
}

export {
    FORGOT_PASSWORD_START,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_SUBMIT_START,
    FORGOT_PASSWORD_SUBMIT_SUCCESS,
}
export {
    forgotPassword,
    forgotPasswordNewPasswordSubmit,
}
