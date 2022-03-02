import React from "react"
import { ButtonGroup } from "../Common"

export default class NoteEdit extends React.Component {
    state = {
        note: {},
        content: '',
        header: '',
    };

    buttons = [
        { label: "Save", bulmaClassName: "is-success" },
        { label: "Close Without Saving" },
        { label: "Delete", bulmaClassName: "is-danger" },
    ]

    render() {
        var { content, header } = this.props;
        return (
            <div>
                <div className="block">
                    <input className="input" value={header}/>
                </div>
                <div className="block">
                    <textarea className="textarea" value={content}/>
                </div>
                <ButtonGroup buttons={this.buttons}/>
            </div>
        );
    };
}
