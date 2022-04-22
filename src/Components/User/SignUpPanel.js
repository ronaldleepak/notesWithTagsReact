import React from "react"
import { connect } from 'react-redux'
import {
    Button,
    LinkButton,
    ErrorMessageBox,
    TextField,
} from "Components/Common"
import { signUp } from "Actions"
import {
    BUTTON_STYLE,
    SIGNIN_PAGE_VIEW_STATUS,
} from "Util/Constants"

class SignUpPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            email: "",
            password: "",
            passwordToConfirm: "",
        };
    }

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value});
    }

    handleSignInButtonClick = () => {
        const { onPanelChange } = this.props;
        onPanelChange(SIGNIN_PAGE_VIEW_STATUS.SIGNIN);
    }

    handleSignUpButtonClick = () => {
        const {
            userName,
            email,
            password,
        } = this.state;

        const { onSignUp } = this.props;

        onSignUp(userName, password, email);
    }

    render() {
        const {
            userName,
            password,
            email,
            passwordToConfirm,
        } = this.state;

        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-4">
                    <div className="box">
                        <ErrorMessageBox refName="signup"/>
                        <TextField
                            value={userName}
                            placeholder="User name"
                            name="userName-input"
                            onChange={this.handleInputChange("userName")}
                        />
                        <TextField
                            value={email}
                            placeholder="Email"
                            name="email-input"
                            onChange={this.handleInputChange("email")}
                        />
                        <TextField
                            value={password}
                            placeholder="Password"
                            name="password-input"
                            isPassword={true}
                            onChange={this.handleInputChange("password")}
                        />
                        <TextField
                            value={passwordToConfirm}
                            placeholder="Confirm Password"
                            name="confirm-password-input"
                            isPassword={true}
                            onChange={this.handleInputChange("passwordToConfirm")}
                        />
                        <Button
                            label="Sign Up"
                            name="signup"
                            buttonStyle={BUTTON_STYLE.SUBMIT}
                            action={this.handleSignUpButtonClick}/>

                        <div className="mt-6">
                            <p>
                                Already have an account?
                            </p>
                            <LinkButton
                                label="Sign in"
                                name="signin"
                                action={this.handleSignInButtonClick}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapDispatchToProps = {
    onSignUp: signUp,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(SignUpPanel)
