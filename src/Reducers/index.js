import { combineReducers } from '@reduxjs/toolkit';

import fetchUserDataProgress from './FetchUserData';
import note from './Note';

import startAppProgress from './StartAppProgress';
import fetchUserDataProgress from './FetchUserDataProgress';
import userAuth from './UserAuth';
import userSignup from './UserSignup';
import userForgotPassword from './UserForgotPassword';
import componentError from './Error';

const reducer = combineReducers({
    note,

    startAppProgress,
    fetchUserDataProgress,
    userAuth,
    userSignup,
    userForgotPassword,
    componentError,
});

export default reducer;
