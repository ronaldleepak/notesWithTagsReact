import { uid } from '../Util/Util.js';

export const createNote = () => {
    return {
        id: uid(),
        tags: [],
        header: 'Write your header here',
        content: 'Write your contents here',
        createdDate: Date.now(),
        modifiedDate: Date.now(),
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

export const deleteNoteFromList = (notes, id) => {
    return notes.filter( note => note.id !== id )
}
