import { combineReducers } from '@reduxjs/toolkit';

import note from './Note';

import startAppProgress from './StartAppProgress';
import fetchUserDataProgress from './FetchUserDataProgress';
import userAuth from './UserAuth';

import loginPanel from './LoginPanel';
import signUpPanel from './SignUpPanel';
import forgotPasswordPanel from './ForgotPasswordPanel';

import componentError from './Error';

const reducer = combineReducers({
    note,

    startAppProgress,
    fetchUserDataProgress,
    userAuth,

    loginPanel,
    signUpPanel,
    forgotPasswordPanel,

    componentError,
});

export default reducer;
