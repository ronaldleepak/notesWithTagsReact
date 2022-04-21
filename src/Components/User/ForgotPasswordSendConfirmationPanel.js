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
} from "Actions"
import {
    BUTTON_STYLE,
    LOADING_STATUS,
    LOGIN_PANEL_STATUS,
} from "Util/Constants"

class ForgotPasswordSendConfirmationPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
        };
    }

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value})
    }

    handleSendButtonClick = () => {
        const {
            onSendConfirmation,
        } = this.props;

        const {
            userName,
        } = this.state;

        onSendConfirmation(userName);
    }

    handleCancelButtonClick = () => {
        const { onPanelChange } = this.props;
        onPanelChange(LOGIN_PANEL_STATUS.LOGIN);
    }

    render() {
        const {
            userName
        } = this.state;

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
    };
}
export default ForgotPasswordSendConfirmationPanel;
