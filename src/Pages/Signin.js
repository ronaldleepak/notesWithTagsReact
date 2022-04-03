import React from "react"
import { connect } from 'react-redux'
import {
    LoginPanel,
    SignupPanel,
    ConfirmPanel,
    ForgotPasswordPanel,
} from "../Components/User"
import { LOGIN_PANEL_STATUS } from "../Util/Constants"

const {
    LOGIN,
    SIGNUP,
    CONFIRM,
    FORGOT_PASSWORD,
} = LOGIN_PANEL_STATUS;

class SigninPage extends React.Component {
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
        const { confirmUser } = this.props;

        if (confirmUser && panelStatus !== CONFIRM) {
            return <ConfirmPanel onPanelChange={this.handlePanelChange}/>
        }

        switch (panelStatus) {
            case LOGIN:
                return <LoginPanel onPanelChange={this.handlePanelChange}/>
            case SIGNUP:
                return <SignupPanel onPanelChange={this.handlePanelChange}/>
            case CONFIRM:
                return <ConfirmPanel onPanelChange={this.handlePanelChange}/>
            case FORGOT_PASSWORD:
                return <ForgotPasswordPanel onPanelChange={this.handlePanelChange}/>
            default:
                return null;
        }
    }

    render() {
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
    };
}
const mapStateToProps = (state) => {
    return {
        confirmUser: state.userAuth.confirmUser,
    }
}
const enhancer = connect(mapStateToProps, null);

export default enhancer(SigninPage)
