import { createAction } from "redux-actions";
import { Auth } from 'aws-amplify'
import { signIn } from "."
import { addComponentError } from ".";

const SIGNUP_START = 'SIGNUP_START';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const CONFIRM_SIGNUP_START = 'CONFIRM_SIGNUP_START';
const CONFIRM_SIGNUP_SUCCESS = 'CONFIRM_SIGNUP_SUCCESS';
const RESEND_CONFIRMATION_START = 'RESEND_CONFIRMATION_START';
const RESEND_CONFIRMATION_SUCCESS = 'RESEND_CONFIRMATION_SUCCESS';

const signUpStart = createAction(SIGNUP_START);
const signUpSuccess = createAction(SIGNUP_SUCCESS);
const confirmSignUpStart = createAction(CONFIRM_SIGNUP_START);
const confirmSignUpSuccess = createAction(CONFIRM_SIGNUP_SUCCESS);
const resendConfirmationStart = createAction(RESEND_CONFIRMATION_START);
const resendConfirmationSuccess = createAction(RESEND_CONFIRMATION_SUCCESS);

const signUp = (userName, password, email) => async (dispatch, getState) => {
    dispatch(signUpStart())

    try {
        await Auth.signUp({
            userName,
            password,
            attributes: {
                email
            }
        });

        dispatch(signUpSuccess())
    } catch (error) {
        const errorMessage = `Failed to sign up: ${error.message.toString()}`;
        dispatch(addComponentError("signup", errorMessage))
    }
}

const confirmSignUp = (userName, password, confirmationCode) => async (dispatch, getState) => {
    dispatch(confirmSignUpStart())

    try {
        await Auth.confirmSignUp(userName, confirmationCode);

        await dispatch(signIn(userName, password));

        dispatch(confirmSignUpSuccess())
    } catch (error) {
        const errorMessage = `Failed to confirm sign up: ${error.message.toString()}`;
        console.log(error)

        dispatch(addComponentError("confirmSignup", errorMessage))
    }
}

const resendConfirmationEmail = (userName) => async (dispatch, getState) => {
    dispatch(resendConfirmationStart())

    try {
        await Auth.resendSignUp(userName);

        dispatch(resendConfirmationSuccess())
    } catch (error) {
        const errorMessage = `Failed to resend confirmation email: ${error.message.toString()}`;
        console.log(error)

        dispatch(addComponentError("confirmSignup", errorMessage))
    }
}

export {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    CONFIRM_SIGNUP_START,
    CONFIRM_SIGNUP_SUCCESS,
    RESEND_CONFIRMATION_START,
    RESEND_CONFIRMATION_SUCCESS,
}
export {
    signUp,
    confirmSignUp,
    resendConfirmationEmail,
};
