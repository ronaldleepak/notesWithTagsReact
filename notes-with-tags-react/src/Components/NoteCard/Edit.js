import React from "react"
import { connect } from 'react-redux'
import { ButtonGroup, Card, Textfield, Textarea } from "../Common"
import { deleteNote, saveNote } from "../../Actions"
import { VIEW_STATUS, BUTTON_STYLE } from "../../Util/Constants"

class NoteEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: props.note.content,
            header: props.note.header,
        };
    }

    handleSaveButtonClick = () => {
        const { onViewChange, onSaveNoteClick, note } = this.props;
        onViewChange(VIEW_STATUS.DETAIL);
        onSaveNoteClick(note)
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

    buttons = [
        {
            label: "Save",
            buttonStyle: BUTTON_STYLE.SUBMIT,
            action: this.handleSaveButtonClick,
        },
        {
            label: "Close Without Saving",
            action: this.handleCloseButtonClick,
        },
        {
            label: "Delete",
            buttonStyle: BUTTON_STYLE.DANGER,
            action: this.handleDeleteButtonClick,
        },
    ]

    render() {
        var { content, header } = this.state;

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
                <ButtonGroup buttons={this.buttons}/>
            </Card>
        );
    };
}

const mapDispatchToProps = {
    onDeleteNoteClick: deleteNote,
    onSaveNoteClick: saveNote,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(NoteEdit)
