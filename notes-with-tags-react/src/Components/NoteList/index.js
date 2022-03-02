import React from "react"
import { connect } from 'react-redux'
import { ButtonGroup } from "../Common"
import NoteCard from "../NoteCard"

class NoteList extends React.Component {

    buttons = [
        { label: "New Note" },
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
                                <NoteCard note={note}/>
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
        notes: state.notes
    }
}

const enhancer = connect(mapStateToProps);

export default enhancer(NoteList)
