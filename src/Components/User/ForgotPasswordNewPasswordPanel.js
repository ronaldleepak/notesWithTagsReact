import React from "react"
import {
    Button,
    LinkButton,
    MessageBox,
    Textfield,
} from "Components/Common"
import {
    BUTTON_STYLE,
    SIGNIN_PAGE_VIEW_STATUS,
} from "Util/Constants"

class ForgotPasswordNewPasswordPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            confirmationCode: "",
            newPassword: "",
            confirmNewPassword: "",
        };
    }

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value})
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
        onPanelChange(SIGNIN_PAGE_VIEW_STATUS.SIGNIN);
    }

    render() {
        const {
            userName,
            confirmationCode,
            newPassword,
            confirmNewPassword,
        } = this.state;

        return (
            <div className="box">
                <p>
                    Please input confirmation code and new password
                </p>
                <MessageBox component="forgotPasswordSubmit"/>
                <Textfield
                    value={userName}
                    placeholder="User Name"
                    name="userName-input"
                    onChange={this.handleInputChange("userName")}
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
    };
}

export default ForgotPasswordNewPasswordPanel
