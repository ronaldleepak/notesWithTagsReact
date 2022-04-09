import React from "react"
import { connect } from 'react-redux'
import {
    Button,
    LinkButton,
    Textfield,
} from "../Common"
import {
    confirmSignUp,
    resendConfirmationEmail,
    cancelConfirmSignup,
} from "../../Actions"
import {
    BUTTON_STYLE,
    LOADING_STATUS,
    LOGIN_PANEL_STATUS,
} from "../../Util/Constants"

class ConfirmPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            confirmationCode: "",
        };
    }

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value})
    }

    handleConfirmationCodeSubmit = () => {
        const {
            confirmUser,
            onConfirm,
        } = this.props;

        const {
            confirmationCode,
        } = this.state;

        onConfirm(confirmUser.username, confirmUser.password, confirmationCode);
    }

    handleResendButtonClick = () => {
        const {
            confirmUser,
            onResend,
        } = this.props;

        onResend(confirmUser.username);
    }

    handleCancelButtonClick = () => {
        const { onPanelChange, onCancel } = this.props;
        onCancel();
        onPanelChange(LOGIN_PANEL_STATUS.LOGIN);
    }

    render() {
        const {
            confirmUser,
        } = this.props;

        const {
            confirmationCode
        } = this.state;

        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-4">
                    <div className="box">
                        <p>
                            Welcome {confirmUser.username}! Please input confirmation code from confirmation email
                        </p>
                        <Textfield
                            value={confirmationCode}
                            placeholder="Confirmation Code"
                            name="confirmation-code-input"
                            onChange={this.handleInputChange("confirmationCode")}
                        />
                        <Button
                            label="Submit"
                            name="confirmation-code-submit"
                            buttonStyle={BUTTON_STYLE.SUBMIT}
                            action={this.handleConfirmationCodeSubmit}/>
                        <Button
                            label="Resend Cofirmation Email"
                            name="resend-confirmation-code"
                            buttonStyle={BUTTON_STYLE.SUBMIT}
                            action={this.handleResendButtonClick}/>

                        <div className="mt-6">
                            <LinkButton
                                label="Cancel"
                                name="cancel"
                                action={this.handleCancelButtonClick}
                            />
                        </div>
                    </div>
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

const mapDispatchToProps = {
    onConfirm: confirmSignUp,
    onResend: resendConfirmationEmail,
    onCancel: cancelConfirmSignup,
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(ConfirmPanel)
