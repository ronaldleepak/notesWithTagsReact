import { createAction } from "redux-actions";
import { API } from 'aws-amplify'
import {
    createNote as CreateNote,
    deleteNote as DeleteNote,
    updateNote as UpdateNote,
    createTag as CreateTag,
    deleteTag as DeleteTag,
    createNoteTags as CreateNoteTags,
    deleteNoteTags as DeleteNoteTags,
} from '../graphql/noteWithTagsMutations'
import { Note } from '../models/'

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
        const newNote = (await API.graphql(
        {
            query: CreateNote,
            variables: {
                input: new Note({
                    header: "Write your header here",
                    content: "Write your contents here",
                }),
            },
            authMode: "AMAZON_COGNITO_USER_POOLS",
        })).data.createNote;

        dispatch(newNoteSuccess(newNote))
    } catch (error) {
        const errorMessage = `Failed to new note: ${error.toString()}`;
        console.log(error)

        dispatch(newNoteFailure(errorMessage))
    }
}

export const saveNote = (saveData) => async (dispatch, getState) => {
    dispatch(saveNoteStart())

    try {

        // delete tags
        await saveData.deleteTags.forEach((noteTag) => {
            API.graphql(
            {
                query: DeleteNoteTags,
                variables: {
                    input: {
                        id: noteTag.id
                    }
                },
                authMode: "AMAZON_COGNITO_USER_POOLS",
            });

            API.graphql(
            {
                query: DeleteTag,
                variables: {
                    input: {
                        id: noteTag.tag.id
                    }
                },
                authMode: "AMAZON_COGNITO_USER_POOLS",
            });
        });

        // create new tags
        await saveData.newTags.forEach((noteTag) => {
            API.graphql(
            {
                query: CreateTag,
                variables: {
                    input: noteTag.tag,
                },
                authMode: "AMAZON_COGNITO_USER_POOLS",
            });

            API.graphql(
            {
                query: CreateNoteTags,
                variables: {
                    input: {
                        id: noteTag.id,
                        noteID: saveData.note.id,
                        tagID: noteTag.tag.id,
                    },
                },
                authMode: "AMAZON_COGNITO_USER_POOLS",
            });
        })

        // update note
        const updatedNote = (await API.graphql(
        {
            query: UpdateNote,
            variables: {
                input: saveData.note,
            },
            authMode: "AMAZON_COGNITO_USER_POOLS",
        })).data.updateNote;

        dispatch(saveNoteSuccess(updatedNote))
    } catch (error) {
        const errorMessage = `Failed to save note: ${error.toString()}`;
        console.log(error)

        dispatch(saveNoteFailure(errorMessage))
    }
}

export const deleteNote = (noteID) => async (dispatch, getState) => {
    dispatch(deleteNoteStart())

    try {
        const deletedNoteData = await API.graphql(
        {
            query: DeleteNote,
            variables: {
                input: {
                    id: noteID,
                },
            },
            authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        const deletedNote = deletedNoteData.data.deleteNote
        dispatch(deleteNoteSuccess(deletedNote))
    } catch (error) {
        const errorMessage = `Failed to delete note: ${error.toString()}`;
        console.log(error)

        dispatch(deleteNoteFailure(errorMessage))
    }
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
