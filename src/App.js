import React from "react"
import { connect } from 'react-redux'
import { HomePage, SigninPage } from "./Pages";
import { NavBar } from "./Components/Common"
import '@aws-amplify/ui-react/styles.css';
import { LOADING_STATUS } from "./Util/Constants";
class App extends React.Component {

    loadMainPage = () => {
        const { isUserSignedIn, isUserLoading } = this.props;

        if (isUserLoading) {
            return null;
        } else {
            return (isUserSignedIn) ? (
                <HomePage/>
            ) : (
                <SigninPage/>
            );
        }
    }

    render() {
        return (
            <div>
                <NavBar/>
                {this.loadMainPage()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isUserSignedIn: state.userAuth.user !== null,
        isUserLoading: state.userAuth.loadingStatus === LOADING_STATUS.LOADING,
    }
}

const enhancer = connect(mapStateToProps, null);

export default enhancer(App)
