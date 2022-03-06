import { createAction } from "redux-actions";

const NEW_NOTE = 'NEW_NOTE';
const SAVE_NOTE = 'SAVE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';

export const newNote = createAction(NEW_NOTE);
export const saveNote = createAction(SAVE_NOTE);
export const deleteNote = createAction(DELETE_NOTE);

export {
    NEW_NOTE,
    SAVE_NOTE,
    DELETE_NOTE,
}

