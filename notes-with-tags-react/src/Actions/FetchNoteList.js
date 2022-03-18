import { createAction } from "redux-actions";
import { API } from 'aws-amplify'
import {
    listNotes as ListNotes,
} from '../graphql/queries'

const FETCH_NOTE_LIST_START = 'FETCH_NOTE_LIST_START';
const FETCH_NOTE_LIST_SUCCESS = 'FETCH_NOTE_LIST_SUCCESS';
const FETCH_NOTE_LIST_FAILURE = 'FETCH_NOTE_LIST_FAILURE';

const fetchStart = createAction(FETCH_NOTE_LIST_START);
const fetchSuccess = createAction(FETCH_NOTE_LIST_SUCCESS);
const fetchFailure = createAction(FETCH_NOTE_LIST_FAILURE);

const fetchNoteList = () => async (dispatch, getState) => {
    dispatch(fetchStart());

    try {
        const noteListData = await API.graphql({
            query: ListNotes,
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        });
        const noteList = noteListData.data.listNotes.items;

        dispatch(fetchSuccess(noteList));
    } catch (error) {
        const errorMessage = `Failed to get note list: ${error.toString()}`;
        console.log(error)
        dispatch(fetchFailure(errorMessage))
    }
}

export {
    FETCH_NOTE_LIST_START,
    FETCH_NOTE_LIST_SUCCESS,
    FETCH_NOTE_LIST_FAILURE,
}
export default fetchNoteList;

