import React from "react"

export default class NoteEdit extends React.Component {
    state = {
        note: {},
        content: '',
        header: '',
    };

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
                <div class="buttons">
                    <button class="button is-light is-success" type="submit">Save</button>
                    <button class="button is-light">Close Without Saving</button>
                    <button class="button is-light is-danger">Delete</button>
                </div>
            </div>
        );
    };
}
