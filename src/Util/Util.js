import _ from 'lodash-es'

const exportNotesAsJSONFile = (notes) => {
    downloadFile({
        data: JSON.stringify(notes),
        fileName: "notes.json",
        fileType: "application/json",
    });
};

const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });
  
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
};

const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            // Success!
        });
}

const simplifyNotesObject = (noteObject) => {
    const notes = noteObject.notes;
    const simplifiedNotes = _.map(notes, (note) => {
        const simplifiedNotes = _.omit(note, ['id', 'owner', 'createdAt', 'updatedAt'])

        // simplify tag list
        simplifiedNotes.tags = _.map(note.tags.items, (tagObj) => {
            const simplifiedTag = _.omit(tagObj.tag, ['id', 'owner', 'createdAt', 'updatedAt']);
            return simplifiedTag;
        });

        return simplifiedNotes;
    })

    return {
        notes: simplifiedNotes
    }
}

export {
    exportNotesAsJSONFile,
    copyTextToClipboard,
    simplifyNotesObject,
}
