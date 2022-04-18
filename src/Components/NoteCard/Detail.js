import React from "react"
import {
    NewLineText,
    CreatedModifiedDate,
    Button,
    Card,
    TagsControl,
} from "Components/Common"
import { VIEW_STATUS } from "Util/Constants"
import { copyTextToClipboard } from "Util/Util"

export default class NoteDetail extends React.Component {

    handleTitleClick = () => {
        const { onViewChange } = this.props;
        onViewChange(VIEW_STATUS.THUMBNAIL);
    }

    handleEditButtonClick = () => {
        const { onViewChange } = this.props;
        onViewChange(VIEW_STATUS.EDIT);
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
                        <CreatedModifiedDate
                            createdDate={note.createdAt}
                            modifiedDate={note.updatedAt}/>
                    </div>
                </div>
                <NewLineText text={note.content}/>
                <TagsControl
                    noteTags={tags}
                    allowEdit={false}
                    onTagAdded={this.handleTagAdded}
                    onTagDeleted={this.handleTagDeleted}/>
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
