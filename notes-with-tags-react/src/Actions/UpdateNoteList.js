import { createAction } from "redux-actions";
import { API, graphqlOperation } from 'aws-amplify'
import { createNote, updateNote } from '../graphql/mutations'

const NEW_NOTE_START = 'NEW_NOTE_START';
const NEW_NOTE_SUCCESS = 'NEW_NOTE_SUCCESS';
const NEW_NOTE_FAILURE = 'NEW_NOTE_FAILURE';
const SAVE_NOTE_START = 'SAVE_NOTE_START';
const SAVE_NOTE_SUCCESS = 'SAVE_NOTE_SUCCESS';
const SAVE_NOTE_FAILURE = 'SAVE_NOTE_FAILURE';
const DELETE_NOTE_START = 'DELETE_NOTE_START';
const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

const newNoteStart = createAction(NEW_NOTE_START);
const newNoteSuccess = createAction(NEW_NOTE_SUCCESS);
const newNoteFailure = createAction(NEW_NOTE_FAILURE);
const saveNoteStart = createAction(SAVE_NOTE_START);
const saveNoteSuccess = createAction(SAVE_NOTE_SUCCESS);
const saveNoteFailure = createAction(SAVE_NOTE_FAILURE);
const deleteNoteStart = createAction(DELETE_NOTE_START);
const deleteNoteSuccess = createAction(DELETE_NOTE_SUCCESS);
const deleteNoteFailure = createAction(DELETE_NOTE_FAILURE);

export const newNote = () => async (dispatch, getState) => {
    dispatch(newNoteStart())

    try {
        const newNoteData = await API.graphql(graphqlOperation(createNote, {input: 
            {
                header: "Write your header here",
                content: "Write your contents here",
            },
        }));
        const newNote = newNoteData.data.createNote;
        dispatch(newNoteSuccess(newNote))
    } catch (error) {
        const errorMessage = `Failed to new note: ${error.toString()}`;
        console.log(error)

        dispatch(newNoteFailure(errorMessage))
    }
}

export const saveNote = (noteAttrs) => async (dispatch, getState) => {
    dispatch(saveNoteStart())

    try {
        const updatedNoteData = await API.graphql(graphqlOperation(updateNote, {input: 
            noteAttrs
        }));
        const updatedNote = updatedNoteData.data.updateNote
        dispatch(saveNoteSuccess(updatedNote))
    } catch (error) {
        const errorMessage = `Failed to save note: ${error.toString()}`;
        console.log(error)

        dispatch(saveNoteFailure(errorMessage))
    }
}

export const deleteNote = (noteAttrs) => async (dispatch, getState) => {
    const { notes } = getState();
}

export {
    NEW_NOTE_START,
    NEW_NOTE_SUCCESS,
    NEW_NOTE_FAILURE,
    SAVE_NOTE_START,
    SAVE_NOTE_SUCCESS,
    SAVE_NOTE_FAILURE,
    DELETE_NOTE_START,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_FAILURE
}
