import { createAction } from "redux-actions";
import { Auth } from 'aws-amplify'
import { fetchUserData, addComponentError } from "."

const LOGIN_START = 'LOGIN_START';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_CONFIRM_USER = 'LOGIN_CONFIRM_USER';
const LOGOUT_START = 'LOGOUT_START';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const loginStart = createAction(LOGIN_START);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginConfirmUser = createAction(LOGIN_CONFIRM_USER);
const logoutStart = createAction(LOGOUT_START);
const logoutSuccess = createAction(LOGOUT_SUCCESS);

const login = (username, password) => async (dispatch, getState) => {
    dispatch(loginStart())

    try {
        await Auth.signIn(username, password);

        dispatch(loginSuccess());
        dispatch(fetchUserData());
    } catch (error) {
        const errorMessage = `Failed to sign in: ${error.message.toString()}`;

        if (error.name === "UserNotConfirmedException") {
            // user is still not confirmed -> go to confirmation page
            dispatch(loginConfirmUser({
                username,
                password,
            }));
        } else {
            dispatch(addComponentError("login", errorMessage))
        }
    }
}

const logout = () => async (dispatch, getState) => {
    dispatch(logoutStart())

    try {
        await Auth.signOut();
        dispatch(logoutSuccess());
        dispatch(fetchUserData());
    } catch (error) {
        const errorMessage = `Failed to logout: ${error.message.toString()}`;

        dispatch(addComponentError("logout", errorMessage));
    }
}

export {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_CONFIRM_USER,
    LOGOUT_START,
    LOGOUT_SUCCESS,
}
export {
    login,
    logout,
}
