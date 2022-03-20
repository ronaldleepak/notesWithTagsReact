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
import {
    listNoteTags as ListNoteTags,
    listTags as ListTags,
} from '../graphql/noteWithTagsQueries'
import { Note } from '../models/'
import _ from 'lodash-es'

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

    const tags = getState().note.tags;

    try {
        // delete note tags
        for (const noteTag of saveData.deleteTags) {
            dispatch(deleteNoteTag(noteTag.id))
        }

        // delete tags that unused
        dispatch(deleteUnusedTags());

        // create new note tags
        for (const noteTag of saveData.newTags) {
            // search if there is existing tag, if yes, use that tag
            var newTagID = noteTag.tag.id;

            const existingTag = _.find(tags, { 'name': noteTag.tag.name });
            if (existingTag != null) {
                newTagID = existingTag.id;
            } else {
                dispatch(createTag(noteTag.tag));
            }

            // create note tag
            dispatch(createNoteTag(noteTag.id, saveData.note.id, newTagID))
        }

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

export const deleteNote = (note) => async (dispatch, getState) => {
    dispatch(deleteNoteStart())

    try {
        // Delete related note tags
        for (const noteTag of note.tags.items) {
            dispatch(deleteNoteTag(noteTag.id))
        }

        // Delete note
        const deletedNoteData = await API.graphql(
        {
            query: DeleteNote,
            variables: { input: { id: note.id }},
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

const createTag = (tag) => async (dispatch, getState) => {
    await API.graphql(
    {
        query: CreateTag,
        variables: {
            input: tag,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
    });
}

const deleteTag = (tagID) => async (dispatch, getState) => {
    await API.graphql(
    {
        query: DeleteTag,
        variables: { input: { id: tagID }},
        authMode: "AMAZON_COGNITO_USER_POOLS",
    });
}

const createNoteTag = (noteTagID, noteID, tagID) => async (dispatch, getState) => {
    await API.graphql(
    {
        query: CreateNoteTags,
        variables: {
            input: {
                id: noteTagID,
                noteID: noteID,
                tagID: tagID,
            },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
    });
}

const deleteNoteTag = (noteTagID) => async (dispatch, getState) => {
    await API.graphql(
    {
        query: DeleteNoteTags,
        variables: { input: { id: noteTagID }},
        authMode: "AMAZON_COGNITO_USER_POOLS",
    });
}

const deleteUnusedTags = () => async (dispatch, getState) => {
    // delete unused tag
    const tagList = (await API.graphql({
        query: ListTags,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
    })).data.listTags.items;
    const tagListUnused = tagList.filter((tag) => tag.notes.items.length === 0)

    for (const tag of tagListUnused) {
        dispatch(deleteTag(tag.id))
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
