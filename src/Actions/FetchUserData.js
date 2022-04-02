import {
    fetchNoteList,
    fetchTagList,
    fetchCurrentUserData,
} from "./";

const fetchUserData = () => async (dispatch, getState) => {
    dispatch(fetchNoteList());
    dispatch(fetchTagList());
    dispatch(fetchCurrentUserData());
}

export default fetchUserData;

