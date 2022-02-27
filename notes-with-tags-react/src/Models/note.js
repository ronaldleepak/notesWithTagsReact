import { uid } from '../Util/Util.js';

export const newNote = () => {
    return {
        noteID: uid(),
        tags: [],
        header: 'New note',
        content: 'Write your contents here',
        createDate: new Date(Date.now()),
        modifyDate: new Date(Date.now()),
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
    // if (noteA.createDate > noteB.createDate) {
    //     return -1;
    // }
    // if (noteA.createDate < noteB.createDate) {
    //     return 1;
    // }
    // return 0;
}

export const filterNotes = (searchItem) => {
    return true;
}

export const deleteNote = (notes, noteID) => {
    return notes.filter( note => note.noteID !== noteID )
}
