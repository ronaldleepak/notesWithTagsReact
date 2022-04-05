import { createAction } from "redux-actions";
import { Auth } from 'aws-amplify'
import { fetchUserData } from "."

const LOGIN_START = 'LOGIN_START';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_CONFIRM_USER = 'LOGIN_CONFIRM_USER';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT_START = 'LOGOUT_START';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
const FETCH_CURRENT_USER_START = 'FETCH_CURRENT_USER_START';
const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
const FETCH_CURRENT_USER_FAILURE = 'FETCH_CURRENT_USER_FAILURE';

const loginStart = createAction(LOGIN_START);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginConfirmUser = createAction(LOGIN_CONFIRM_USER);
const loginFailure = createAction(LOGIN_FAILURE);
const logoutStart = createAction(LOGOUT_START);
const logoutSuccess = createAction(LOGOUT_SUCCESS);
const logoutFailure = createAction(LOGOUT_FAILURE);
const fetchCurrentUserStart = createAction(FETCH_CURRENT_USER_START);
const fetchCurrentUserSuccess = createAction(FETCH_CURRENT_USER_SUCCESS);
const fetchCurrentUserFailure = createAction(FETCH_CURRENT_USER_FAILURE);

const login = (username, password) => async (dispatch, getState) => {
    dispatch(loginStart())

    try {
        await Auth.signIn(username, password);

        dispatch(loginSuccess());
        dispatch(fetchUserData());
    } catch (error) {
        const errorMessage = `Failed to login: ${error.toString()}`;

        if (error.name === "UserNotConfirmedException") {
            // user is still not confirmed -> go to confirmation page
            dispatch(loginConfirmUser({
                username,
                password,
            }));
        } else {
            dispatch(loginFailure(errorMessage));
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
        const errorMessage = `Failed to logout: ${error.toString()}`;
        console.log(error)

        dispatch(logoutFailure(errorMessage));
    }
}

const fetchCurrentUserData = () => async (dispatch, getState) => {
    dispatch(fetchCurrentUserStart())

    try {
        const user = await Auth.currentUserInfo();
        dispatch(fetchCurrentUserSuccess(user));
    } catch (error) {
        const errorMessage = `Failed to fetch current user data: ${error.toString()}`;
        console.log(error)

        dispatch(fetchCurrentUserFailure(errorMessage));
    }
}

export {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_CONFIRM_USER,
    LOGIN_FAILURE,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    FETCH_CURRENT_USER_START,
    FETCH_CURRENT_USER_SUCCESS,
    FETCH_CURRENT_USER_FAILURE,
}
export {
    login,
    logout,
    fetchCurrentUserData,
}
