import React from "react"

export default class NotesDate extends React.Component {
    render() {
        const { note } = this.props;
        const createdDate = new Date(note.createdAt);
        const modifiedDate = new Date(note.updatedAt);
        return (
            <div className="content has-text-grey-light is-small">
                <div>Created Time: {createdDate.toLocaleString('en-GB')}</div>
                <div>Last Modified Time: {modifiedDate.toLocaleString('en-GB')}</div>
            </div>
        );
    };
}
