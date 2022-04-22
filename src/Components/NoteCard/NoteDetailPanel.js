import React from "react"
import {
    NewLineText,
    NotesDate,
    Button,
    Card,
    NoteTagsControl,
} from "Components/Common"
import { NOTE_CARD_VIEW_STATUS } from "Util/Constants"
import { copyTextToClipboard } from "Util/Util"

export default class NoteDetailPanel extends React.Component {

    handleTitleClick = () => {
        const { onViewChange } = this.props;
        onViewChange(NOTE_CARD_VIEW_STATUS.THUMBNAIL);
    }

    handleEditButtonClick = () => {
        const { onViewChange } = this.props;
        onViewChange(NOTE_CARD_VIEW_STATUS.EDITOR);
    }

    handleCopyButtonClick = () => {
        const { note } = this.props;
        copyTextToClipboard(note.content)
    }

    render() {
        const { note } = this.props;
        const tags = (note.tags.items != null) ? note.tags.items : [];

        return (
            <Card name="note-detail">
                <div className="columns">
                    <div className="column is-8">
                        <h2 className="title is-2" onClick={this.handleTitleClick}>
                            {(note.header === "") ? "Untitled" : note.header}
                        </h2>
                    </div>
                    <div className="column is-4">
                        <NotesDate note={note}/>
                    </div>
                </div>
                <NewLineText value={note.content}/>
                <NoteTagsControl
                    noteTags={tags}
                    isAllowingEdit={false}/>
                <div className="block buttons">
                    <Button
                        label="Edit"
                        name="edit-note"
                        action={this.handleEditButtonClick}/>
                    <Button
                        label="Copy Content"
                        name="copy-note"
                        action={this.handleCopyButtonClick}/>
                </div>
            </Card>
        );
    };
}
