import React from "react"
import { connect } from 'react-redux'
import {
    Button,
    LinkButton,
    MessageBox,
    Textfield,
} from "Components/Common"
import {
    forgotPassword,
    submitNewPassword,
} from "Actions"
import {
    BUTTON_STYLE,
    LOADING_STATUS,
    LOGIN_PANEL_STATUS,
    FORGOT_PASSWORD_PANEL_STATUS,
} from "Util/Constants"

const {
    SEND_CONFIRM,
    NEW_PASSWORD,
} = FORGOT_PASSWORD_PANEL_STATUS;

class ForgotPasswordPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            confirmationCode: "",
            newPassword: "",
            confirmNewPassword: "",
            panelStatus: SEND_CONFIRM,
        };
    }

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value})
    }

    handleSendButtonClick = () => {
        const {
            onForgotPassword,
        } = this.props;

        const {
            username,
        } = this.state;

        onForgotPassword(username);

        this.setState({panelStatus: NEW_PASSWORD})
    }

    handleSubmitButtonClick = () => {
        const {
            onSubmitNewPassword,
        } = this.props;

        const {
            userName,
            confirmationCode,
            newPassword,
        } = this.state;

        onSubmitNewPassword(userName, confirmationCode, newPassword);
    }

    handleCancelButtonClick = () => {
        const { onPanelChange } = this.props;
        onPanelChange(LOGIN_PANEL_STATUS.LOGIN);
    }

    loadPanel = (panelStatus) => {
        const {
            userName,
            confirmationCode,
            newPassword,
            confirmNewPassword,
        } = this.state;

        switch (panelStatus) {
            case SEND_CONFIRM:
                return (
                    <div className="box">
                        <p>
                            Please input user name
                        </p>
                        <MessageBox component="forgotPassword"/>
                        <Textfield
                            value={userName}
                            placeholder="User Name"
                            name="username-input"
                            onChange={this.handleInputChange("username")}
                        />
                        <Button
                            label="Continue"
                            name="send-confirmation-email"
                            buttonStyle={BUTTON_STYLE.SUBMIT}
                            action={this.handleSendButtonClick}/>

                        <div className="mt-6">
                            <LinkButton
                                label="Cancel"
                                name="cancel"
                                action={this.handleCancelButtonClick}
                            />
                        </div>
                    </div>
                );
            case NEW_PASSWORD:
                return (
                    <div className="box">
                        <p>
                            Please input confirmation code and new password
                        </p>
                        <MessageBox component="forgotPasswordSubmit"/>
                        <Textfield
                            value={userName}
                            placeholder="User Name"
                            name="username-input"
                            onChange={this.handleInputChange("username")}
                        />
                        <Textfield
                            value={confirmationCode}
                            placeholder="Confirmation Code"
                            name="confirmation-code-input"
                            onChange={this.handleInputChange("confirmationCode")}
                        />
                        <Textfield
                            value={newPassword}
                            placeholder="New Password"
                            isPassword={true}
                            name="confirmation-code-input"
                            onChange={this.handleInputChange("newPassword")}
                        />
                        <Textfield
                            value={confirmNewPassword}
                            placeholder="Confirm New Password"
                            isPassword={true}
                            name="confirmation-code-input"
                            onChange={this.handleInputChange("confirmNewPassword")}
                        />
                        <Button
                            label="Submit"
                            name="submit"
                            buttonStyle={BUTTON_STYLE.SUBMIT}
                            action={this.handleSubmitButtonClick}/>

                        <div className="mt-6">
                            <LinkButton
                                label="Cancel"
                                name="cancel"
                                action={this.handleCancelButtonClick}
                            />
                        </div>
                    </div>
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
    onForgotPassword: forgotPassword,
    onSubmitNewPassword: submitNewPassword,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(ForgotPasswordPanel)
