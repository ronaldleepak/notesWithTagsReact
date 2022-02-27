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
                <div class="block">
                    <input class="input" value={header}/>
                </div>
                <div class="block">
                    <textarea class="textarea" value={content}/>
                </div>
                <ButtonGroup buttons={this.buttons}/>
            </div>
        );
    };
}
