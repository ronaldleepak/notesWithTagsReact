import React from "react"
import { connect } from 'react-redux'
import { ButtonGroup, Card, Textfield, Textarea, TagsControl } from "../Common"
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
            tags,
        } = this.state;

        onSaveNoteClick({
            id: note.id,
            header: header,
            content: content,
            tags: {
                items: tags,
            },
        });
        onViewChange(VIEW_STATUS.DETAIL);
    }

    handleCloseButtonClick = () => {
        const { onViewChange } = this.props;
        onViewChange(VIEW_STATUS.DETAIL);
    }

    handleDeleteButtonClick = () => {
        const { onDeleteNoteClick, note } = this.props;
        onDeleteNoteClick(note.id)
    }

    handleHeaderChange = (e) => {
        this.setState({header: e.target.value})
    }

    handleContentChange = (e) => {
        this.setState({content: e.target.value})
    }

    handleTagsChange = (newTags) => {
        this.setState({tags: newTags})
    }

    render() {
        var { content, header, tags } = this.state;

        return (
            <Card name="note-edit">
                <Textfield
                    value={header}
                    name="note-header-input"
                    onChange={this.handleHeaderChange}
                />
                <Textarea
                    value={content}
                    name="note-content-input"
                    onChange={this.handleContentChange}
                />
                <TagsControl
                    tags={tags}
                    onTagsChange={this.handleTagsChange}/>
                <ButtonGroup buttons={[
                    {
                        label: "Save",
                        name: "save-note",
                        buttonStyle: BUTTON_STYLE.SUBMIT,
                        isLoading: this.props.loadingStatus === LOADING_STATUS.LOADING,
                        action: this.handleSaveButtonClick,
                    },
                    {
                        label: "Close Without Saving",
                        name: "close-note",
                        action: this.handleCloseButtonClick,
                    },
                    {
                        label: "Delete",
                        name: "delete-note",
                        buttonStyle: BUTTON_STYLE.DANGER,
                        isLoading: this.props.loadingStatus === LOADING_STATUS.LOADING,
                        action: this.handleDeleteButtonClick,
                    },
                ]}/>
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
