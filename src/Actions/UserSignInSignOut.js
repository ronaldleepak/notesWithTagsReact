import { createAction } from "redux-actions";
import { Auth } from 'aws-amplify'
import { fetchUserData, addComponentError } from "."

const SIGNIN_START = 'SIGNIN_START';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNIN_SUCCESS_UNCONFIRMED_USER = 'SIGNIN_SUCCESS_UNCONFIRMED_USER';
const SIGNOUT_START = 'SIGNOUT_START';
const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';

const signInStart = createAction(SIGNIN_START);
const signInSuccess = createAction(SIGNIN_SUCCESS);
const signInSuccessUnconfirmedUser = createAction(SIGNIN_SUCCESS_UNCONFIRMED_USER);
const signOutStart = createAction(SIGNOUT_START);
const signOutSuccess = createAction(SIGNOUT_SUCCESS);

const signIn = (userName, password) => async (dispatch, getState) => {
    dispatch(signInStart())

    try {
        await Auth.signIn(userName, password);

        dispatch(signInSuccess());
        dispatch(fetchUserData());
    } catch (error) {
        const errorMessage = `Failed to sign in: ${error.message.toString()}`;

        if (error.name === "UserNotConfirmedException") {
            // user is still not confirmed -> go to confirmation page
            dispatch(signInSuccessUnconfirmedUser());
        } else {
            dispatch(addComponentError("signIn", errorMessage))
        }
    }
}

const signOut = () => async (dispatch, getState) => {
    dispatch(signOutStart())

    try {
        await Auth.signOut();
        dispatch(signOutSuccess());
        dispatch(fetchUserData());
    } catch (error) {
        const errorMessage = `Failed to sign out: ${error.message.toString()}`;

        dispatch(addComponentError("signOut", errorMessage));
    }
}

export {
    SIGNIN_START,
    SIGNIN_SUCCESS,
    SIGNIN_SUCCESS_UNCONFIRMED_USER,
    SIGNOUT_START,
    SIGNOUT_SUCCESS,
}
export {
    signIn,
    signOut,
}
