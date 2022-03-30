import { createAction } from "redux-actions";
import { Auth } from 'aws-amplify'

const LOGIN_START = 'LOGIN_START';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT_START = 'LOGOUT_START';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const loginStart = createAction(LOGIN_START);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginFailure = createAction(LOGIN_FAILURE);
const logoutStart = createAction(LOGOUT_START);
const logoutSuccess = createAction(LOGOUT_SUCCESS);
const logoutFailure = createAction(LOGOUT_FAILURE);

const login = async (username, password) => async (dispatch, getState) => {
    dispatch(loginStart())

    try {
        const user = await Auth.signIn(username, password);
        dispatch(loginSuccess(user))
    } catch (error) {
        const errorMessage = `Failed to login: ${error.toString()}`;
        console.log(error)

        dispatch(loginFailure(errorMessage))
    }
}

const logout = async () => async (dispatch, getState) => {
    dispatch(logoutStart())

    try {
        await Auth.signOut();
        dispatch(logoutSuccess())
    } catch (error) {
        const errorMessage = `Failed to logout: ${error.toString()}`;
        console.log(error)

        dispatch(logoutFailure(errorMessage))
    }
}

export {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
}
export {
    login,
    logout,
};
