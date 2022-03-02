import { createAction } from "redux-actions";

const NEW_NOTE = 'NEW_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';

export const newNote = createAction(NEW_NOTE);
export const deleteNote = createAction(DELETE_NOTE);

export {
    NEW_NOTE,
    DELETE_NOTE,
}

