import React from "react"
import { connect } from 'react-redux'
import {
    Button,
    LinkButton,
    MessageBox,
    Textfield,
} from "Components/Common"
import { signIn } from "Actions"
import {
    BUTTON_STYLE,
    LOADING_STATUS,
    SIGNIN_PANEL_STATUS,
} from "Util/Constants"

class SignInPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
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
            userName,
            password,
        } = this.state;

        onSignin(userName, password);
    }

    handleSignupButtonClick = () => {
        const { onPanelChange } = this.props;
        onPanelChange(SIGNIN_PANEL_STATUS.SIGNUP);
    }

    handleForgotPasswordButtonClick = () => {
        const { onPanelChange } = this.props;
        onPanelChange(SIGNIN_PANEL_STATUS.FORGOT_PASSWORD);
    }

    render() {
        const {
            userName,
            password,
            isShowPasswordField,
        } = this.state;

        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-4">
                    <div className="box">
                        <MessageBox component="login"/>
                        <Textfield
                            value={userName}
                            placeholder="User name"
                            name="userName-input"
                            onChange={this.handleInputChange("userName")}
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
    onSignin: signIn,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(SignInPanel)
