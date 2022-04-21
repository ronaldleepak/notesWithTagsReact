import React from "react"
import { connect } from 'react-redux'
import {
    SignInPanel,
    SignUpPanel,
    ForgotPasswordPanel,
} from "Components/User"
import { SIGNIN_PAGE_VIEW_STATUS, LOADING_STATUS } from "Util/Constants"

const {
    SIGNIN,
    SIGNUP,
    FORGOT_PASSWORD,
} = SIGNIN_PAGE_VIEW_STATUS;

class SignInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            panelStatus: SIGNIN,
        };
    }

    handlePanelChange = (panelStatus) => {
        this.setState({
            panelStatus: panelStatus,
        })
    }

    loadPanel = (panelStatus) => {
        switch (panelStatus) {
            case SIGNIN:
                return <SignInPanel onPanelChange={this.handlePanelChange}/>
            case SIGNUP:
                return <SignUpPanel onPanelChange={this.handlePanelChange}/>
            case FORGOT_PASSWORD:
                return <ForgotPasswordPanel onPanelChange={this.handlePanelChange}/>
            default:
                return null;
        }
    }

    loadSignInPage = () => {
        const { panelStatus } = this.state;
        return (
            <div className="pt-5">
                <div className="block has-text-centered">
                    <h1 className="title is-1">
                        Welcome to NotesWithTags!
                    </h1>
                </div>
                <div>
                    {this.loadPanel(panelStatus)}
                </div>
            </div>
        );
    }

    render() {
        const { user, fetchUserDataProgress } = this.props;
        const isFetchUserLoading = fetchUserDataProgress.loadingStatus === LOADING_STATUS.LOADING

        return (user === null && !isFetchUserLoading) ? this.loadSignInPage() : null
    };
}

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user,
        fetchUserDataProgress: state.fetchUserDataProgress,
    }
}

const enhancer = connect(mapStateToProps, null);

export default enhancer(SignInPage)
