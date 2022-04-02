import { combineReducers } from '@reduxjs/toolkit';

import note from './Note';
import userAuth from './UserAuth';

const reducer = combineReducers({
    note,
    userAuth
});

export default reducer;
