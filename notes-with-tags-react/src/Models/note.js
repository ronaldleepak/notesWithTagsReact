import { uid } from '../Util/Util.js';

export const createNote = () => {
    return {
        noteID: uid(),
        tags: [],
        header: 'Write your header here',
        content: 'Write your contents here',
        createdDate: new Date(Date.now()),
        modifiedDate: new Date(Date.now()),
    };
};

export const sortNotes = (noteA, noteB) => {
    if (noteA.header < noteB.header) {
        return 1;
    }
    if (noteA.header > noteB.header) {
        return -1;
    }
    return 0;
}

export const filterNotes = (searchItem) => {
    return true;
}

export const deleteNoteFromList = (notes, noteID) => {
    return notes.filter( note => note.noteID !== noteID )
}
