import { createAction } from "redux-actions";
import { API } from 'aws-amplify'
import {
    listNotes as ListNotes,
} from '../graphql/noteWithTagsQueries'
import { updateError } from ".";

const FETCH_NOTE_LIST_START = 'FETCH_NOTE_LIST_START';
const FETCH_NOTE_LIST_SUCCESS = 'FETCH_NOTE_LIST_SUCCESS';

const fetchStart = createAction(FETCH_NOTE_LIST_START);
const fetchSuccess = createAction(FETCH_NOTE_LIST_SUCCESS);

const fetchNoteList = () => async (dispatch, getState) => {
    dispatch(fetchStart());

    try {
        const noteList = (await API.graphql({
            query: ListNotes,
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        })).data.listNotes.items;

        dispatch(fetchSuccess(noteList));
    } catch (error) {
        const errorMessage = `Failed to get note list: ${error.toString()}`;
        dispatch(updateError("fetchUserData", errorMessage))
    }
}

export {
    FETCH_NOTE_LIST_START,
    FETCH_NOTE_LIST_SUCCESS,
}
export default fetchNoteList;

