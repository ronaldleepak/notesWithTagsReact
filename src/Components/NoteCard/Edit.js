import React from "react"
import { connect } from 'react-redux'
import {
    Button,
    Card,
    Textfield,
    Textarea,
    TagsControl
} from "../Common"
import { deleteNote, saveNote } from "../../Actions"
import {
    VIEW_STATUS,
    BUTTON_STYLE,
    LOADING_STATUS,
} from "../../Util/Constants"

class NoteEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: props.note.content,
            header: props.note.header,
            tags: (props.note.tags.items != null) ? props.note.tags.items : [],
            newTags: [],
            deleteTags: [],
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
            newTags,
            deleteTags,
        } = this.state;

        onSaveNoteClick({
            note: {
                id: note.id,
                header: header,
                content: content,
            },
            newTags: newTags,
            deleteTags: deleteTags,
        });
        onViewChange(VIEW_STATUS.DETAIL);
    }

    handleCloseButtonClick = () => {
        const { onViewChange } = this.props;
        onViewChange(VIEW_STATUS.DETAIL);
    }

    handleDeleteButtonClick = () => {
        const { onDeleteNoteClick, note } = this.props;
        onDeleteNoteClick(note)
    }

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value});
    }

    handleTagAdded = (newNoteTag) => {
        this.setState({
            tags: [ newNoteTag, ...this.state.tags ],
            newTags: [ newNoteTag, ...this.state.newTags ],
        })
    }

    handleTagDeleted = (deletedNoteTag) => {

        const {
            deleteTags,
            tags,
            newTags,
        } = this.state;

        this.setState({
            tags: tags.filter( noteTag => noteTag.id !== deletedNoteTag.id ),
            newTags: newTags.filter( noteTag => noteTag.id !== deletedNoteTag.id ),
            deleteTags: (deletedNoteTag.createdAt !== null) ? [ deletedNoteTag, ...deleteTags ] : deleteTags,
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
        loadingStatus: state.note.loadingStatus,
    }
}

const mapDispatchToProps = {
    onDeleteNoteClick: deleteNote,
    onSaveNoteClick: saveNote,
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(NoteEdit)
