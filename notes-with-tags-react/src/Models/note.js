import { uid } from '../Util/Util.js';

export const newNote = () => {
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
