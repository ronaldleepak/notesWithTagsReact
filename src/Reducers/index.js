import { combineReducers } from '@reduxjs/toolkit';

import componentError from './Error/Error';

import startAppProgress from './AppLoader/StartAppProgress';
import fetchUserDataProgress from './AppLoader/FetchUserDataProgress';
import userAuth from './AppLoader/UserAuth';

import signInPanel from './UserAuthentication/SignInPanel';
import signUpPanel from './UserAuthentication/SignUpPanel';
import forgotPasswordPanel from './UserAuthentication/ForgotPasswordPanel';

import notesWithTagsPanel from './NotesWithTags/NotesWithTagsPanel';
import importExportNotesPanel from './ImportExportNotes/ImportExportNotesPanel';

const reducer = combineReducers({
    componentError,

    startAppProgress,
    fetchUserDataProgress,
    userAuth,

    signInPanel,
    signUpPanel,
    forgotPasswordPanel,

    notesWithTagsPanel,
    importExportNotesPanel,
});

export default reducer;
