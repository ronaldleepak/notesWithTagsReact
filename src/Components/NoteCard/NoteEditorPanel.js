import React from "react"
import { connect } from 'react-redux'
import {
    Button,
    Card,
    Textfield,
    Textarea,
    TagsControl
} from "Components/Common"
import { deleteNote, saveNote } from "Actions"
import {
    NOTE_CARD_VIEW_STATUS,
    BUTTON_STYLE,
    LOADING_STATUS,
} from "Util/Constants"

class NoteEditorPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: props.note.content,
            header: props.note.header,
            tags: (props.note.tags.items != null) ? props.note.tags.items : [],
            tagsToBeCreated: [],
            tagsToBeDeleted: [],
        };
    }

    handleSaveButtonClick = () => {
        const {
            onViewChange,
            onSaveNoteClick,
            note,
        } = this.props;

        const {
            content,
            header,
            tagsToBeCreated,
            tagsToBeDeleted,
        } = this.state;

        onSaveNoteClick({
            note: {
                id: note.id,
                header: header,
                content: content,
            },
            tagsToBeCreated,
            tagsToBeDeleted,
        });
        onViewChange(NOTE_CARD_VIEW_STATUS.DETAIL);
    }

    handleCloseButtonClick = () => {
        const { onViewChange } = this.props;
        onViewChange(NOTE_CARD_VIEW_STATUS.DETAIL);
    }

    handleDeleteButtonClick = () => {
        const { onDeleteNoteClick, note } = this.props;
        onDeleteNoteClick(note.id)
    }

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value});
    }

    handleTagAdded = (newNoteTag) => {
        const {
            tags,
            tagsToBeCreated,
        } = this.state;

        this.setState({
            tags: [ newNoteTag, ...tags ],
            tagsToBeCreated: [ newNoteTag, ...tagsToBeCreated ],
        })
    }

    handleTagDeleted = (deletedNoteTag) => {
        const {
            tags,
            tagsToBeCreated,
            tagsToBeDeleted,
        } = this.state;

        this.setState({
            tags: tags.filter( noteTag => noteTag.id !== deletedNoteTag.id ),
            tagsToBeCreated: tagsToBeCreated.filter( noteTag => noteTag.id !== deletedNoteTag.id ),
            tagsToBeDeleted: (deletedNoteTag.createdAt !== null) ? [ deletedNoteTag, ...tagsToBeDeleted ] : tagsToBeDeleted,
        })
    }

    render() {
        var { content, header, tags } = this.state;

        return (
            <Card name="note-edit">
                <Textfield
                    value={header}
                    placeholder="Title"
                    name="note-header-input"
                    onChange={this.handleInputChange("header")}
                />
                <Textarea
                    value={content}
                    placeholder="Content"
                    name="note-content-input"
                    onChange={this.handleInputChange("content")}
                />
                <TagsControl
                    noteTags={tags}
                    allowEdit={true}
                    onTagAdded={this.handleTagAdded}
                    onTagDeleted={this.handleTagDeleted}/>
                <div className="block buttons">
                    <Button
                        label="Save"
                        name="save-note"
                        buttonStyle={BUTTON_STYLE.SUBMIT}
                        isLoading={this.props.loadingStatus === LOADING_STATUS.LOADING}
                        action={this.handleSaveButtonClick}/>
                    <Button
                        label="Cancel"
                        name="close-note"
                        action={this.handleCloseButtonClick}/>
                    <Button
                        label="Delete"
                        name="delete-note"
                        buttonStyle={BUTTON_STYLE.DANGER}
                        isLoading={this.props.loadingStatus === LOADING_STATUS.LOADING}
                        action={this.handleDeleteButtonClick}/>
                </div>
            </Card>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        loadingStatus: state.notesWithTagsPanel.loadingStatus,
    }
}

const mapDispatchToProps = {
    onDeleteNoteClick: deleteNote,
    onSaveNoteClick: saveNote,
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(NoteEditorPanel)
