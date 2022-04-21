import React from "react"
import { connect } from 'react-redux'
import NotesWithTagsPanel from "Components/NotesWithTags";
class HomePage extends React.Component { 

    loadHomePage = () => {
        return (
            <div className="pt-5">
                <div className="block has-text-centered">
                    <h1 className="title is-1">
                        Welcome to NotesWithTags!
                    </h1>
                </div>
                <NotesWithTagsPanel />
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
        user: state.userAuth.user,
    }
}

const enhancer = connect(mapStateToProps, null);

export default enhancer(HomePage)
