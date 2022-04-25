import React from "react"
import NotesList from "Components/NotesWithTags/NotesList";
import NotesImportExportPanel from "Components/NotesImportExport";

class NotesWithTagsPanel extends React.Component {

    render() {
        return (
            <div>
                <NotesList/>

                <NotesImportExportPanel/>
            </div>
        );
    };
}

export default NotesWithTagsPanel
