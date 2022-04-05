import { combineReducers } from '@reduxjs/toolkit';

import note from './Note';
import userAuth from './UserAuth';
import userSignup from './UserSignup';
import userForgotPassword from './UserForgotPassword';

const reducer = combineReducers({
    note,
    userAuth,
    userSignup,
    userForgotPassword,
});

export default reducer;
