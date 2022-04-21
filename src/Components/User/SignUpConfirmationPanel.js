import React from "react"
import { connect } from 'react-redux'
import {
    Button,
    LinkButton,
    MessageBox,
    Textfield,
} from "Components/Common"
import {
    resendConfirmationEmail,
} from "Actions"
import {
    BUTTON_STYLE,
    LOADING_STATUS,
} from "Util/Constants"

class SignUpConfirmationPanel extends React.Component {
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
            onConfirmationCodeSubmit,
        } = this.props;

        const {
            confirmationCode,
        } = this.state;

        onConfirmationCodeSubmit(confirmationCode);
    }

    handleResendButtonClick = () => {
        const {
            userName,
            onResend,
        } = this.props;

        onResend(userName);
    }

    handleCancelButtonClick = () => {
        const { onCancel } = this.props;
        onCancel();
    }

    render() {
        const {
            userName,
        } = this.props;

        const {
            confirmationCode
        } = this.state;

        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-4">
                    <div className="box">
                        <p>
                            Welcome {userName}! Please input confirmation code from confirmation email
                        </p>
                        <MessageBox component="signup"/>
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

const mapDispatchToProps = {
    onResend: resendConfirmationEmail,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(SignUpConfirmationPanel)
