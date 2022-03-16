import React from "react"
import { connect } from 'react-redux'
import { ButtonGroup } from "../Common"
import { newNote } from "../../Actions"
import NoteCard from "../NoteCard"

class NoteList extends React.Component {

    buttons = [
        {
            label: "New Note",
            name: "new-note",
            action: () => {
                this.props.onNewNoteClick();
            }
        },
    ]

    render() {
        var {notes} = this.props
        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-9">
                    <ButtonGroup buttons={this.buttons}/>
                    <div className="list">
                    {
                        notes.map(note => {
                            return (
                                <NoteCard note={note} key={note.id}/>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        );
    };
}

const mapDispatchToProps = {
    onNewNoteClick: newNote,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(NoteList)
