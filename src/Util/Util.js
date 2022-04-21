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

const simplifyNotesWithTagsObject = (noteObject) => {
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

export {
    exportNotesAsJSONFile,
    copyTextToClipboard,
    simplifyNotesWithTagsObject,
    getContentFromFile,
}
