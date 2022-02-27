import React from "react"
import { ButtonGroup } from "../Common"
import { exportNotesAsNTWFile } from '../../Util/Util.js'

export default class ImportExport extends React.Component {
    state = {
        notes: [],
    };

    buttons = [
        { label: "Import .NWT file" },
        { label: "Export .NWT file" }
    ]

    render() {
        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-9">
                    <ButtonGroup buttons={this.buttons}/>
                </div>
            </div>
        );
    };
}
