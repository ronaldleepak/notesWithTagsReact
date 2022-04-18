import { createAction } from "redux-actions";
import {
    fetchNotes,
    fetchTags,
    fetchCurrentUserInfo,
} from "./";

const FETCH_USER_DATA_START = 'FETCH_USER_DATA_START';
const FETCH_USER_DATA_DONE = 'FETCH_USER_DATA_DONE';

const fetchUserDataStart = createAction(FETCH_USER_DATA_START);
const fetchUserDataDone = createAction(FETCH_USER_DATA_DONE);

const fetchUserData = () => async (dispatch, getState) => {
    dispatch(fetchUserDataStart());

    await dispatch(fetchCurrentUserInfo());
    await dispatch(fetchNotes());
    await dispatch(fetchTags());

    dispatch(fetchUserDataDone());
}

export {
    FETCH_USER_DATA_START,
    FETCH_USER_DATA_DONE,
}
export default fetchUserData;

