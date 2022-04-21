import React from "react"
import { connect } from 'react-redux'
import { Button, MessageBox } from "Components/Common"
import { createNote } from "Actions"
import NoteCard from "Components/NoteCard"
import { LOADING_STATUS } from 'Util/Constants';
class NotesList extends React.Component {

    handleCreateNoteButtonClick = () => {
        const { onNewNoteClick } = this.props;
        onNewNoteClick();
    }

    render() {
        const { notes } = this.props
        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-9">
                    <MessageBox component="note"/>
                    <Button
                        label="Create Note"
                        name="new-note"
                        isLoading={this.props.loadingStatus === LOADING_STATUS.LOADING}
                        action={this.handleCreateNoteButtonClick}/>
                    <div className="list">
                    {
                        notes.map(note => {
                            return (
                                <NoteCard note={note} key={note.id} isNew={note.isNew}/>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        loadingStatus: state.notesWithTagsPanel.loadingStatus,
    }
}

const mapDispatchToProps = {
    onNewNoteClick: createNote,
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(NotesList)
