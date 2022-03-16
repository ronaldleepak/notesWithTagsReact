import React from "react"
import { connect } from 'react-redux'
import { ButtonGroup } from "../Common"
import { newNote } from "../../Actions"
import NoteCard from "../NoteCard"
import { LOADING_STATUS } from '../../Util/Constants';
class NoteList extends React.Component {

    render() {
        var {notes} = this.props
        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-9">
                    <ButtonGroup buttons={[
                        {
                            label: "New Note",
                            name: "new-note",
                            isLoading: this.props.loadingStatus === LOADING_STATUS.LOADING,
                            action: () => {
                                this.props.onNewNoteClick();
                            }
                        },
                    ]}/>
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
