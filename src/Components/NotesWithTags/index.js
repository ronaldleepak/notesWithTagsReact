import React from "react"
import NotesList from "Components/NotesWithTags/NotesList";
import ImportExport from "Components/ImportExport";

class NotesWithTagsPanel extends React.Component {

    render() {
        return (
            <div>
                <NotesList/>

                <ImportExport/>
            </div>
        );
    };
}

export default NotesWithTagsPanel
