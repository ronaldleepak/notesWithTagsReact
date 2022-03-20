import React from "react"
import { connect } from 'react-redux'
import {
    ButtonGroup,
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
        onDeleteNoteClick(note.id)
    }

    handleHeaderChange = (e) => {
        this.setState({header: e.target.value})
    }

    handleContentChange = (e) => {
        this.setState({content: e.target.value})
    }

    handleTagAdded = (newNoteTag) => {
        this.setState({
            tags: [ newNoteTag, ...this.state.tags ],
            newTags: [ newNoteTag, ...this.state.newTags ],
        })
    }

    handleTagDeleted = (deletedNoteTag) => {

        var newDeleteTags = this.state.deleteTags;
        if (deletedNoteTag.createdAt !== null) {
            newDeleteTags = [ deletedNoteTag, ...this.state.deleteTags ];
        }

        this.setState({
            tags: this.state.tags.filter( noteTag => noteTag.id !== deletedNoteTag.id ),
            newTags: this.state.newTags.filter( noteTag => noteTag.id !== deletedNoteTag.id ),
            deleteTags: newDeleteTags,
        })
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
                    noteTags={tags}
                    allowEdit={true}
                    onTagAdded={this.handleTagAdded}
                    onTagDeleted={this.handleTagDeleted}/>
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
