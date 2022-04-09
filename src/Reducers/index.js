import { combineReducers } from '@reduxjs/toolkit';

import fetchUserData from './FetchUserData';
import note from './Note';
import userAuth from './UserAuth';
import userSignup from './UserSignup';
import userForgotPassword from './UserForgotPassword';
import error from './Error';

const reducer = combineReducers({
    note,
    fetchUserData,
    userAuth,
    userSignup,
    userForgotPassword,
    error,
});

export default reducer;
