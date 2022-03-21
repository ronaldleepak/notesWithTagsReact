import React from "react"
import { connect } from 'react-redux'
import NoteList from "../Components/NoteList";
import ImportExport from "../Components/ImportExport";
import { getNotes } from "../Selectors/GetNotes";

class HomePage extends React.Component { 
    render() {
        var { notes } = this.props;
        return (
            <div className="pt-5">
                <div className="block has-text-centered">
                    <h1 className="title is-1">
                        Welcome to NotesWithTags!
                    </h1>
                </div>
                <div>
                    <NoteList notes={notes}/>

                    <ImportExport notes={notes}/>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        notes: getNotes(state),
    }
}

const enhancer = connect(mapStateToProps, null);

export default enhancer(HomePage)
