import { createAction } from "redux-actions";
import { API } from 'aws-amplify'
import {
    getNote as GetNote,
} from '../graphql/queries'

const FETCH_NOTE_START = 'FETCH_NOTE_START';
const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
const FETCH_NOTE_FAILURE = 'FETCH_NOTE_FAILURE';

const fetchStart = createAction(FETCH_NOTE_START);
const fetchSuccess = createAction(FETCH_NOTE_SUCCESS);
const fetchFailure = createAction(FETCH_NOTE_FAILURE);

const fetchNote = (noteID) => async (dispatch, getState) => {
    dispatch(fetchStart());

    try {
        const noteData = await API.graphql({
            query: GetNote,
            variables: {
                id: noteID,
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        });
        const note = noteData.data.getNote;
        
        dispatch(fetchSuccess(note));
    } catch (error) {
        const errorMessage = `Failed to get note list: ${error.toString()}`;
        console.log(error)
        dispatch(fetchFailure(errorMessage))
    }
}

export {
    FETCH_NOTE_START,
    FETCH_NOTE_SUCCESS,
    FETCH_NOTE_FAILURE,
}
export default fetchNote;

