import React from "react"
import { exportNotesAsNTWFile } from '../../Util/Util.js'

export default class ImportExport extends React.Component {
    state = {
        message: "Welcome to NotesWithTags!",
        notes: [],
    };

    render() {
        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-9">
                    <div className="block buttons">
                        <button className="button is-light">Import .NWT file</button>
                        <button className="button is-light">Export .NWT file</button>
                    </div>
                </div>
            </div>
        );
    };
}
