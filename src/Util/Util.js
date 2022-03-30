export const exportNotesAsJSONFile = (notes) => {
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

export const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            // Success!
        });
}
