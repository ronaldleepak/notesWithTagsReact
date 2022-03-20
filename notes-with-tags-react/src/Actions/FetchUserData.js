import { fetchNoteList, fetchTagList } from "./";

const fetchUserData = () => async (dispatch, getState) => {
    dispatch(fetchNoteList());
    dispatch(fetchTagList());
}

export default fetchUserData;

