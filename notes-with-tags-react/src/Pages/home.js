import React from "react"
import NoteList from "../Components/NoteList/Index";
import ImportExport from "../Components/ImportExport/Index";

export default class HomePage extends React.Component {
    state = {
        message: "Welcome to NotesWithTags!",
        notes: [],
    };

    render() {
        return (
            <div>
                <div className="block has-text-centered">
                    <h1 className="title is-1">
                        {this.state.message}
                    </h1>
                </div>
                <div>
                    <NoteList/>

                    <ImportExport/>
                </div>
            </div>
        );
    };
}
