import React from "react"
import { connect } from 'react-redux'
import { Button, MessageBox } from "Components/Common"
import { newNote } from "Actions"
import NoteCard from "Components/NoteCard"
import { LOADING_STATUS } from 'Util/Constants';
class NoteList extends React.Component {

    render() {
        var {notes, onNewNoteClick} = this.props
        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-9">
                    <MessageBox component="note"/>
                    <Button
                        label="New Note"
                        name="new-note"
                        isLoading={this.props.loadingStatus === LOADING_STATUS.LOADING}
                        action={onNewNoteClick}/>
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
        loadingStatus: state.note.loadingStatus,
    }
}

const mapDispatchToProps = {
    onNewNoteClick: newNote,
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(NoteList)
