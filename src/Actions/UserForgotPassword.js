import { createAction } from "redux-actions";
import { Auth } from 'aws-amplify'
import { addComponentError } from ".";

const FORGOT_PASSWORD_START = 'FORGOT_PASSWORD_START';
const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
const SUBMIT_NEW_PASSWORD_START = 'SUBMIT_NEW_PASSWORD_START';
const SUBMIT_NEW_PASSWORD_SUCCESS = 'SUBMIT_NEW_PASSWORD_SUCCESS';

const forgotPasswordStart = createAction(FORGOT_PASSWORD_START);
const forgotPasswordSuccess = createAction(FORGOT_PASSWORD_SUCCESS);
const forgotPasswordSubmitStart = createAction(SUBMIT_NEW_PASSWORD_START);
const forgotPasswordSubmitSuccess = createAction(SUBMIT_NEW_PASSWORD_SUCCESS);

const forgotPassword = (userName) => async (dispatch, getState) => {
    dispatch(forgotPasswordStart())

    try {
        await Auth.forgotPassword(userName);

        dispatch(forgotPasswordSuccess())
    } catch (error) {
        const errorMessage = `Failed to send forgot password code: ${error.message.toString()}`;
        dispatch(addComponentError("forgotPassword", errorMessage))
    }
}

const submitNewPassword = (userName, confirmationCode, newPassword) => async (dispatch, getState) => {
    dispatch(forgotPasswordSubmitStart())

    try {
        await Auth.forgotPasswordSubmit(userName, confirmationCode, newPassword);

        dispatch(forgotPasswordSubmitSuccess())
    } catch (error) {
        const errorMessage = `Failed to update new password: ${error.message.toString()}`;
        dispatch(addComponentError("forgotPasswordSubmit", errorMessage))
    }
}

export {
    FORGOT_PASSWORD_START,
    FORGOT_PASSWORD_SUCCESS,
    SUBMIT_NEW_PASSWORD_START,
    SUBMIT_NEW_PASSWORD_SUCCESS,
}
export {
    forgotPassword,
    submitNewPassword,
}
