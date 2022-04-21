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
} from 'graphql/noteWithTagsMutations'
import {
    listTags as ListTags,
    listNoteTags as ListNoteTags,
} from 'graphql/noteWithTagsQueries'
import {
    fetchTags
} from '.'
import { Note } from 'models/'
import _ from 'lodash-es'
import { addComponentError } from ".";

const CREATE_NOTE_START = 'CREATE_NOTE_START';
const CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS';
const SAVE_NOTE_START = 'SAVE_NOTE_START';
const SAVE_NOTE_SUCCESS = 'SAVE_NOTE_SUCCESS';
const DELETE_NOTE_START = 'DELETE_NOTE_START';
const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';

const createNoteStart = createAction(CREATE_NOTE_START);
const createNoteSuccess = createAction(CREATE_NOTE_SUCCESS);
const saveNoteStart = createAction(SAVE_NOTE_START);
const saveNoteSuccess = createAction(SAVE_NOTE_SUCCESS);
const deleteNoteStart = createAction(DELETE_NOTE_START);
const deleteNoteSuccess = createAction(DELETE_NOTE_SUCCESS);

export const createNote = () => async (dispatch, getState) => {
    dispatch(createNoteStart())

    try {
        const newNote = (await API.graphql(
        {
            query: CreateNote,
            variables: {
                input: new Note({
                    header: "",
                    content: "",
                }),
            },
            authMode: "AMAZON_COGNITO_USER_POOLS",
        })).data.createNote;

        dispatch(createNoteSuccess(newNote))
    } catch (error) {
        const errorMessage = `Failed to create note: ${error.toString()}`;
        dispatch(addComponentError("note", errorMessage))
    }
}

export const saveNote = (saveData) => async (dispatch, getState) => {
    dispatch(saveNoteStart())

    const tags = getState().notesWithTagsPanel.tags;

    try {

        const noteID = saveData.note.id;
        const {
            tagsToBeCreated,
            tagsToBeDeleted,
            note,
        } = saveData;

        // delete note tags
        for (const noteTag of tagsToBeDeleted) {
            dispatch(deleteNoteTag(noteTag.id))
        }

        // delete tags that unused
        dispatch(deleteUnusedTags());

        // create new note tags
        for (const newNoteTag of tagsToBeCreated) {
            // search if there is existing tag, if yes, use that tag
            const { tag, id } = newNoteTag;
            var newTagID = tag.id;

            const existingTag = _.find(tags, { 'name': tag.name });
            if (existingTag != null) {
                newTagID = existingTag.id;
            } else {
                dispatch(createTag(tag));
            }

            // create note tag
            dispatch(createNoteTag(id, noteID, newTagID))
        }

        // update note
        const { updatedNote } = (await API.graphql(
            {
                query: UpdateNote,
                variables: {
                    input: note,
                },
                authMode: "AMAZON_COGNITO_USER_POOLS",
            })
        ).data;

        dispatch(saveNoteSuccess(updatedNote))
        dispatch(fetchTags())
    } catch (error) {
        const errorMessage = `Failed to save note: ${error.toString()}`;
        dispatch(addComponentError("note", errorMessage))
    }
}

export const deleteNote = (noteID) => async (dispatch, getState) => {
    dispatch(deleteNoteStart())

    try {
        const noteTagList = (await API.graphql({
            query: ListNoteTags,
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        })).data.listNoteTags.items;
        const noteTagListToBeDeleted = noteTagList.filter((noteTag) => noteTag.noteID === noteID)

        // Delete related note tags
        for (const noteTag of noteTagListToBeDeleted) {
            dispatch(deleteNoteTag(noteTag.id))
        }

        // Delete note
        const deletedNoteData = await API.graphql(
        {
            query: DeleteNote,
            variables: { input: { id: noteID }},
            authMode: "AMAZON_COGNITO_USER_POOLS",
        });

        // Delete unused tag
        dispatch(deleteUnusedTags());
        
        const deletedNote = deletedNoteData.data.deleteNote
        dispatch(deleteNoteSuccess(deletedNote))
        dispatch(fetchTags())
    } catch (error) {
        const errorMessage = `Failed to delete note: ${error.toString()}`;
        dispatch(addComponentError("note", errorMessage))
    }
}

const createTag = (tag) => async () => {
    await API.graphql(
    {
        query: CreateTag,
        variables: {
            input: tag,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
    });
}

const deleteTag = (tagID) => async () => {
    await API.graphql(
    {
        query: DeleteTag,
        variables: { input: { id: tagID }},
        authMode: "AMAZON_COGNITO_USER_POOLS",
    });
}

const createNoteTag = (noteTagID, noteID, tagID) => async () => {
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

const deleteNoteTag = (noteTagID) => async () => {
    await API.graphql(
    {
        query: DeleteNoteTags,
        variables: { input: { id: noteTagID }},
        authMode: "AMAZON_COGNITO_USER_POOLS",
    });
}

const deleteUnusedTags = () => async (dispatch) => {
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
    CREATE_NOTE_START,
    CREATE_NOTE_SUCCESS,
    SAVE_NOTE_START,
    SAVE_NOTE_SUCCESS,
    DELETE_NOTE_START,
    DELETE_NOTE_SUCCESS,
}
