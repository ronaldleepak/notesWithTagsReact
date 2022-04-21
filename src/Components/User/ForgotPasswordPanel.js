import React from "react"
import { connect } from 'react-redux'
import {
    forgotPassword,
    submitNewPassword,
} from "Actions"
import {
    FORGOT_PASSWORD_PANEL_STATUS,
} from "Util/Constants"
import ForgotPasswordSendConfirmationPanel from "./ForgotPasswordSendConfirmationPanel"
import ForgotPasswordNewPasswordPanel from "./ForgotPasswordNewPasswordPanel"

const {
    SEND_CONFIRM,
    NEW_PASSWORD,
} = FORGOT_PASSWORD_PANEL_STATUS;

class ForgotPasswordPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            panelStatus: SEND_CONFIRM,
        };
    }

    handleSendConfirmation = (userName) => {
        const { onSendConfirmation } = this.props;
        onSendConfirmation(userName);

        this.setState({userName: userName});
        this.handlePanelChange(NEW_PASSWORD);
    }

    handleNewPasswordSubmit = (userName, confirmationCode, password) => {
        const { onSubmitNewPassword } = this.props;
        onSubmitNewPassword(userName, confirmationCode, password);
    }

    handlePanelChange = (panelStatus) => {
        this.setState({
            panelStatus: panelStatus,
        })
    }

    loadPanel = (panelStatus) => {
        const {
            userName,
        } = this.state;

        switch (panelStatus) {
            case SEND_CONFIRM:
                return (
                    <ForgotPasswordSendConfirmationPanel
                        onSendConfirmation={this.handleSendConfirmation}/>
                )
            case NEW_PASSWORD:
                return (
                    <ForgotPasswordNewPasswordPanel
                        userName={userName}
                        onSubmitNewPassword={this.handleNewPasswordSubmit}/>
                );
            default:
                return null;
        }
    }

    render() {
        const {
            panelStatus
        } = this.state;

        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-4">
                    {this.loadPanel(panelStatus)}
                </div>
            </div>
        );
    };
}

const mapDispatchToProps = {
    onSendConfirmation: forgotPassword,
    onSubmitNewPassword: submitNewPassword,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(ForgotPasswordPanel)
