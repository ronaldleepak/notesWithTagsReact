import { createAction } from "redux-actions";
import { Auth } from 'aws-amplify'
import { login } from "."

const SIGNUP_START = 'SIGNUP_START';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
const CANCEL_CONFIRM_START = 'CANCEL_CONFIRM_START';
const CANCEL_CONFIRM_SUCCESS = 'CANCEL_CONFIRM_SUCCESS';
const CANCEL_CONFIRM_FAILURE = 'CANCEL_CONFIRM_FAILURE';
const CONFIRM_SIGNUP_START = 'CONFIRM_SIGNUP_START';
const CONFIRM_SIGNUP_SUCCESS = 'CONFIRM_SIGNUP_SUCCESS';
const CONFIRM_SIGNUP_FAILURE = 'CONFIRM_SIGNUP_FAILURE';
const CONFIRM_RESEND_START = 'CONFIRM_RESEND_START';
const CONFIRM_RESEND_SUCCESS = 'CONFIRM_RESEND_SUCCESS';
const CONFIRM_RESEND_FAILURE = 'CONFIRM_RESEND_FAILURE';

const signUpStart = createAction(SIGNUP_START);
const signUpSuccess = createAction(SIGNUP_SUCCESS);
const signUpFailure = createAction(SIGNUP_FAILURE);
const cancelConfirmStart = createAction(CANCEL_CONFIRM_START);
const cancelConfirmSuccess = createAction(CANCEL_CONFIRM_SUCCESS);
const cancelConfirmFailure = createAction(CANCEL_CONFIRM_FAILURE);
const confirmSignUpStart = createAction(CONFIRM_SIGNUP_START);
const confirmSignUpSuccess = createAction(CONFIRM_SIGNUP_SUCCESS);
const confirmSignUpFailure = createAction(CONFIRM_SIGNUP_FAILURE);
const confirmResendStart = createAction(CONFIRM_RESEND_START);
const confirmResendSuccess = createAction(CONFIRM_RESEND_SUCCESS);
const confirmResendFailure = createAction(CONFIRM_RESEND_FAILURE);

const signUp = (username, password, email) => async (dispatch, getState) => {
    dispatch(signUpStart())

    try {
        await Auth.signUp({
            username,
            password,
            attributes: {
                email
            }
        });

        dispatch(signUpSuccess())
    } catch (error) {
        const errorMessage = `Failed to sign up: ${error.toString()}`;
        console.log(error)

        dispatch(signUpFailure(errorMessage))
    }
}

const cancelConfirmSignup = () => async (dispatch, getState) => {
    dispatch(cancelConfirmStart())

    try {
        dispatch(cancelConfirmSuccess())
    } catch (error) {
        const errorMessage = `Failed to cancel confirm: ${error.toString()}`;
        console.log(error)

        dispatch(cancelConfirmFailure(errorMessage))
    }
}

const confirmSignUp = (username, password, code) => async (dispatch, getState) => {
    dispatch(confirmSignUpStart())

    try {
        await Auth.confirmSignUp(username, code);

        dispatch(login(username, password));

        dispatch(confirmSignUpSuccess())
    } catch (error) {
        const errorMessage = `Failed to confirm sign up: ${error.toString()}`;
        console.log(error)

        dispatch(confirmSignUpFailure(errorMessage))
    }
}

const resendConfirmationEmail = (username) => async (dispatch, getState) => {
    dispatch(confirmResendStart())

    try {
        await Auth.resendSignUp(username);

        dispatch(confirmResendSuccess())
    } catch (error) {
        const errorMessage = `Failed to resend confirmation code: ${error.toString()}`;
        console.log(error)

        dispatch(confirmResendFailure(errorMessage))
    }
}

export {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    CANCEL_CONFIRM_START,
    CANCEL_CONFIRM_SUCCESS,
    CANCEL_CONFIRM_FAILURE,
    CONFIRM_SIGNUP_START,
    CONFIRM_SIGNUP_SUCCESS,
    CONFIRM_SIGNUP_FAILURE,
    CONFIRM_RESEND_START,
    CONFIRM_RESEND_SUCCESS,
    CONFIRM_RESEND_FAILURE,
}
export {
    signUp,
    cancelConfirmSignup,
    confirmSignUp,
    resendConfirmationEmail,
};
