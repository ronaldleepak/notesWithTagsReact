import { createAction } from "redux-actions";
import { API } from 'aws-amplify'
import {
    listNotes as ListNotes,
} from '../graphql/noteWithTagsQueries'
import { addComponentError } from ".";

const FETCH_NOTES_START = 'FETCH_NOTES_START';
const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';

const fetchStart = createAction(FETCH_NOTES_START);
const fetchSuccess = createAction(FETCH_NOTES_SUCCESS);

const fetchNotes = () => async (dispatch, getState) => {
    dispatch(fetchStart());

    try {
        const notes = (await API.graphql({
            query: ListNotes,
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        })).data.listNotes.items;

        dispatch(fetchSuccess(notes));
    } catch (error) {
        const errorMessage = `Failed to get notes: ${error.toString()}`;
        dispatch(addComponentError("fetchUserData", errorMessage))
    }
}

export {
    FETCH_NOTES_START,
    FETCH_NOTES_SUCCESS,
}
export default fetchNotes;

