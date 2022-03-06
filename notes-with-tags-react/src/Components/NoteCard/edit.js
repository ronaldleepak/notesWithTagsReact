import React from "react"
import { connect } from 'react-redux'
import { ButtonGroup, Card } from "../Common"
import { deleteNote } from "../../Actions"
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
        const { onViewChange } = this.props;
        onViewChange(VIEW_STATUS.DETAIL);
    }

    handleCloseButtonClick = () => {
        const { onViewChange } = this.props;
        onViewChange(VIEW_STATUS.DETAIL);
    }

    handleDeleteButtonClick = () => {
        const { onDeleteNoteClick, note } = this.props;
        onDeleteNoteClick(note.noteID)
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
                <div className="block">
                    <input className="input" value={header}/>
                </div>
                <div className="block">
                    <textarea className="textarea" value={content}/>
                </div>
                <ButtonGroup buttons={this.buttons}/>
            </Card>
        );
    };
}

const mapDispatchToProps = {
    onDeleteNoteClick: deleteNote,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(NoteEdit)
