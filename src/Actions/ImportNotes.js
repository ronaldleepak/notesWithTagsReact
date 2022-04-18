
import { createAction } from "redux-actions";
import { API } from 'aws-amplify'
import { validateNoteContents } from "../Validators";
import { Note, Tag, NoteTags } from '../models/'
import _ from 'lodash-es'

import {
    createNote as CreateNote,
    createTag as CreateTag,
    createNoteTags as CreateNoteTags,
} from '../graphql/noteWithTagsMutations'
import {
    fetchUserData,
} from '.'
import { addComponentError } from ".";

const IMPORT_NOTES_START = 'IMPORT_NOTES_START';
const IMPORT_NOTES_SUCCESS = 'IMPORT_NOTES_SUCCESS';

const importStart = createAction(IMPORT_NOTES_START);
const importSuccess = createAction(IMPORT_NOTES_SUCCESS);

const getContentFromFile = async (file) => {
    return new Promise((resolve, reject) => {

        if (!file || file.size === 0 || file.type !== "application/json") {
            reject(new Error("Invalid File"))
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            try {
                console.log(reader.result)
                const contentObject = JSON.parse(reader.result);
                resolve(contentObject);
            } catch (error) {
                reject(error);
            }
        }
        reader.onerror = reject;
        reader.readAsText(file);
    })
}

const importNotes = (file) => async (dispatch, getState) => {
    dispatch(importStart);

    try {
        const content = await getContentFromFile(file);

        await validateNoteContents(content);

        // import notes to note list
        const notes = content.notes;
        const existingTags = getState().note.tags;

        dispatch(importNotesWithTags(notes, existingTags))

        dispatch(importSuccess())
        dispatch(fetchUserData())
    } catch (error) {
        const errorMessage = `Failed to import notes: ${error.toString()}`;
        console.log(error)

        dispatch(addComponentError("importExport", errorMessage))
    }
}

const importNotesWithTags = (notes, existingTags) => async (dispatch, getState) => {
    for (const note of notes) {
        const newNote = new Note({
            header: note.header,
            content: note.content,
        });
        dispatch(importNote(newNote))

        for (const tag of note.tags) {
            const newTag = new Tag({
                name: tag.name,
            })
            var newTagID = newTag.id;

            const existingTag = _.find(existingTags, { 'name': tag.name });
            if (existingTag != null) {
                newTagID = existingTag.id;
            } else {
                // create tag
                dispatch(importTag(newTag));
            }

            // import note tags
            const newNoteTags = new NoteTags({});
            dispatch(importNoteTag(newNoteTags.id, newNote.id, newTagID));
        }
    }
}

const importNote = (note) => async () => {
    await API.graphql(
    {
        query: CreateNote,
        variables: {
            input: note,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
    });
}

const importTag = (tag) => async () => {
    await API.graphql(
    {
        query: CreateTag,
        variables: {
            input: tag,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
    });
}

const importNoteTag = (noteTagID, noteID, tagID) => async () => {
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

export {
    IMPORT_NOTES_START,
    IMPORT_NOTES_SUCCESS,
}
export default importNotes;

