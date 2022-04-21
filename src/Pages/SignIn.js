import React from "react"
import { connect } from 'react-redux'
import {
    LoginPanel,
    SignUpPanel,
    ConfirmPanel,
    ForgotPasswordPanel,
} from "Components/User"
import { LOGIN_PANEL_STATUS, LOADING_STATUS } from "Util/Constants"

const {
    LOGIN,
    SIGNUP,
    CONFIRM,
    FORGOT_PASSWORD,
} = LOGIN_PANEL_STATUS;

class SignInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            panelStatus: LOGIN,
        };
    }

    handlePanelChange = (panelStatus) => {
        this.setState({
            panelStatus: panelStatus,
        })
    }

    loadPanel = (panelStatus) => {
        const { isUserConfirmed } = this.props;

        if (isUserConfirmed && panelStatus !== CONFIRM) {
            return <ConfirmPanel onPanelChange={this.handlePanelChange}/>
        }

        switch (panelStatus) {
            case LOGIN:
                return <LoginPanel onPanelChange={this.handlePanelChange}/>
            case SIGNUP:
                return <SignUpPanel onPanelChange={this.handlePanelChange}/>
            case CONFIRM:
                return <ConfirmPanel onPanelChange={this.handlePanelChange}/>
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
        isUserConfirmed: state.signInPanel.isUserConfirmed,
        user: state.userAuth.user,
        fetchUserDataProgress: state.fetchUserDataProgress,
    }
}

const enhancer = connect(mapStateToProps, null);

export default enhancer(SignInPage)
