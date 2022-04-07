import { createAction } from "redux-actions";
import {
    fetchNoteList,
    fetchTagList,
    fetchCurrentUserInfo,
} from "./";

const FETCH_USER_START = 'FETCH_USER_START';
const FETCH_USER_DONE = 'FETCH_USER_DONE';

const fetchUserDataStart = createAction(FETCH_USER_START);
const fetchUserDataDone = createAction(FETCH_USER_DONE);

const fetchUserData = () => async (dispatch, getState) => {
    dispatch(fetchUserDataStart());

    await dispatch(fetchCurrentUserInfo());
    await dispatch(fetchNoteList());
    await dispatch(fetchTagList());

    dispatch(fetchUserDataDone());
}

export {
    FETCH_USER_START,
    FETCH_USER_DONE,
}
export default fetchUserData;

