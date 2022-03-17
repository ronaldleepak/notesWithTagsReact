import { createAction } from "redux-actions";
import { API } from 'aws-amplify'
import { listNotes } from '../graphql/queries'

const GET_NOTE_START = 'GET_NOTE_START';
const GET_NOTE_SUCCESS = 'GET_NOTE_SUCCESS';
const GET_NOTE_FAILURE = 'GET_NOTE_FAILURE';

const getStart = createAction(GET_NOTE_START);
const getSuccess = createAction(GET_NOTE_SUCCESS);
const getFailure = createAction(GET_NOTE_FAILURE);

const getNoteList = () => async (dispatch, getState) => {
    dispatch(getStart());

    try {
        const noteListData = await API.graphql({
            query: listNotes,
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        });
        const noteList = noteListData.data.listNotes.items;
        dispatch(getSuccess(noteList));
    } catch (error) {
        const errorMessage = `Failed to get note list: ${error.toString()}`;
        console.log(error)
        dispatch(getFailure(errorMessage))
    }
}

export {
    GET_NOTE_START,
    GET_NOTE_SUCCESS,
    GET_NOTE_FAILURE,
}
export default getNoteList;

