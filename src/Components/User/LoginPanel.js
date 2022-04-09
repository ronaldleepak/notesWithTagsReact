import React from "react"
import { connect } from 'react-redux'
import {
    Button,
    LinkButton,
    MessageBox,
    Textfield,
} from "../Common"
import { login } from "../../Actions"
import {
    BUTTON_STYLE,
    LOADING_STATUS,
    LOGIN_PANEL_STATUS,
} from "../../Util/Constants"

class LoginPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            isShowPasswordField: false,
        };
    }

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value});
    }

    handleContinueButtonClick = () => {
        this.setState({isShowPasswordField: true})
    }

    handleSigninButtonClick = () => {
        const {
            onSignin,
        } = this.props;

        const {
            username,
            password,
        } = this.state;

        onSignin(username, password);
    }

    handleSignupButtonClick = () => {
        const { onPanelChange } = this.props;
        onPanelChange(LOGIN_PANEL_STATUS.SIGNUP);
    }

    handleForgotPasswordButtonClick = () => {
        const { onPanelChange } = this.props;
        onPanelChange(LOGIN_PANEL_STATUS.FORGOT_PASSWORD);
    }

    render() {
        const {
            username,
            password,
            isShowPasswordField,
        } = this.state;

        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-4">
                    <div className="box">
                        <MessageBox component="login"/>
                        <Textfield
                            value={username}
                            placeholder="User name"
                            name="username-input"
                            onChange={this.handleInputChange("username")}
                        />
                        {(isShowPasswordField) ? (
                            <div>
                                <Textfield
                                    value={password}
                                    placeholder="Password"
                                    name="password-input"
                                    isPassword={true}
                                    onChange={this.handleInputChange("password")}
                                />
                                <Button
                                    label="Sign in"
                                    name="signin"
                                    buttonStyle={BUTTON_STYLE.SUBMIT}
                                    isLoading={this.props.loadingStatus === LOADING_STATUS.LOADING}
                                    action={this.handleSigninButtonClick}/>

                                <div className="mt-6">
                                    <LinkButton
                                        label="Forgot password?"
                                        name="forgot-password"
                                        action={this.handleForgotPasswordButtonClick}
                                    />
                                </div>
                            </div>
                        ) : (
                            <Button
                                label="Continue"
                                name="continue"
                                buttonStyle={BUTTON_STYLE.SUBMIT}
                                action={this.handleContinueButtonClick}/>
                        )}

                        <div className="mt-6">
                            <p>
                                Don't have an account?
                            </p>
                            <LinkButton
                                label="Create Account"
                                name="signup"
                                action={this.handleSignupButtonClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapDispatchToProps = {
    onSignin: login,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(LoginPanel)
