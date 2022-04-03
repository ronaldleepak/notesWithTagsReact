import { createAction } from "redux-actions";
import { Auth } from 'aws-amplify'

const SIGNUP_START = 'SIGNUP_START';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
const CONFIRM_SIGNUP_START = 'CONFIRM_SIGNUP_START';
const CONFIRM_SIGNUP_SUCCESS = 'CONFIRM_SIGNUP_SUCCESS';
const CONFIRM_SIGNUP_FAILURE = 'CONFIRM_SIGNUP_FAILURE';
const CONFIRM_RESEND_START = 'CONFIRM_RESEND_START';
const CONFIRM_RESEND_SUCCESS = 'CONFIRM_RESEND_SUCCESS';
const CONFIRM_RESEND_FAILURE = 'CONFIRM_RESEND_FAILURE';

const signUpStart = createAction(SIGNUP_START);
const signUpSuccess = createAction(SIGNUP_SUCCESS);
const signUpFailure = createAction(SIGNUP_FAILURE);
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

const confirmSignUp = (username, code) => async (dispatch, getState) => {
    dispatch(confirmSignUpStart())

    try {
        await Auth.confirmSignUp(username, code);

        dispatch(confirmSignUpSuccess())
    } catch (error) {
        const errorMessage = `Failed to confirm sign up: ${error.toString()}`;
        console.log(error)

        dispatch(confirmSignUpFailure(errorMessage))
    }
}

const resendConfirmationCode = (username) => async (dispatch, getState) => {
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
    CONFIRM_SIGNUP_START,
    CONFIRM_SIGNUP_SUCCESS,
    CONFIRM_SIGNUP_FAILURE,
    CONFIRM_RESEND_START,
    CONFIRM_RESEND_SUCCESS,
    CONFIRM_RESEND_FAILURE,
}
export {
    signUp,
    confirmSignUp,
    resendConfirmationCode,
};
