import { combineReducers } from '@reduxjs/toolkit';

import fetchUserData from './FetchUserData';
import note from './Note';
import userAuth from './UserAuth';
import userSignup from './UserSignup';
import userForgotPassword from './UserForgotPassword';
import componentError from './Error';

const reducer = combineReducers({
    note,
    fetchUserData,
    userAuth,
    userSignup,
    userForgotPassword,
    componentError,
});

export default reducer;
