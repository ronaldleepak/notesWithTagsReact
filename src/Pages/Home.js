import React from "react"
import { connect } from 'react-redux'
import NotesList from "Components/NotesList";
import ImportExport from "Components/ImportExport";
import { getNotes } from "Selectors/GetNotes";
import { LOADING_STATUS } from "Util/Constants";

class HomePage extends React.Component { 

    loadHomePage = () => {
        const { notes } = this.props;
        return (
            <div className="pt-5">
                <div className="block has-text-centered">
                    <h1 className="title is-1">
                        Welcome to NotesWithTags!
                    </h1>
                </div>
                <div>
                    <NotesList notes={notes}/>

                    <ImportExport notes={notes}/>
                </div>
            </div>
        );
    }

    render() {
        const { user } = this.props;

        return ((user) ? this.loadHomePage() : null)
    };
}

const mapStateToProps = (state) => {
    return {
        notes: getNotes(state),
        user: state.userAuth.user,
        isFetchUserLoading: state.fetchUserDataProgress.loadingStatus === LOADING_STATUS.LOADING,
    }
}

const enhancer = connect(mapStateToProps, null);

export default enhancer(HomePage)
