import { combineReducers } from '@reduxjs/toolkit';

import componentError from './Error';

import startAppProgress from './StartAppProgress';
import fetchUserDataProgress from './FetchUserDataProgress';
import userAuth from './UserAuth';

import loginPanel from './LoginPanel';
import signUpPanel from './SignUpPanel';
import forgotPasswordPanel from './ForgotPasswordPanel';

import notesWithTagsPanel from './NotesWithTagsPanel';
import importExportNotesPanel from './ImportExportNotesPanel';

const reducer = combineReducers({
    componentError,

    startAppProgress,
    fetchUserDataProgress,
    userAuth,

    loginPanel,
    signUpPanel,
    forgotPasswordPanel,

    notesWithTagsPanel,
    importExportNotesPanel,
});

export default reducer;
