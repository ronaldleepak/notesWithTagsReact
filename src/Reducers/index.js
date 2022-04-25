import { combineReducers } from '@reduxjs/toolkit';

import componentError from './Error/Error';

import startAppProgress from './AppLoader/StartAppProgress';
import fetchUserDataProgress from './AppLoader/FetchUserDataProgress';
import userAuth from './AppLoader/UserAuth';

import signInPanel from './UserAuthentication/SignInPanel';
import signUpPanel from './UserAuthentication/SignUpPanel';
import forgotPasswordPanel from './UserAuthentication/ForgotPasswordPanel';

import notesWithTagsPanel from './NotesWithTags/NotesWithTagsPanel';
import notesImportExportPanel from './NotesWithTags/NotesImportExportPanel';

const reducer = combineReducers({
    componentError,

    startAppProgress,
    fetchUserDataProgress,
    userAuth,

    signInPanel,
    signUpPanel,
    forgotPasswordPanel,

    notesWithTagsPanel,
    notesImportExportPanel,
});

export default reducer;
