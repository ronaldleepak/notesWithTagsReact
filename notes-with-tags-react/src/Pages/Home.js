import React from "react"
import { connect } from 'react-redux'
import NoteList from "../Components/NoteList";
import ImportExport from "../Components/ImportExport";
import { getNotes } from "../Selectors/GetNotes";

class HomePage extends React.Component { 

    state = {
        message: "Welcome to NotesWithTags!",
    };

    render() {
        var { notes } = this.props;
        return (
            <div>
                <div className="block has-text-centered">
                    <h1 className="title is-1">
                        {this.state.message}
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
