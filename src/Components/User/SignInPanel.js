import React from "react"
import { connect } from 'react-redux'
import {
    Button,
    LinkButton,
    MessageBox,
    Textfield,
} from "Components/Common"
import { SignUpConfirmationPanel } from '.'
import {
    signIn,
    confirmSignUp,
    signOutUnconfirmedUser,
} from "Actions"
import {
    BUTTON_STYLE,
    LOADING_STATUS,
    SIGNIN_PAGE_VIEW_STATUS,
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

    handleSignInButtonClick = () => {
        const {
            onSignin,
        } = this.props;

        const {
            userName,
            password,
        } = this.state;

        onSignin(userName, password);
    }

    handleSignUpConfirm = (confirmationCode) => {
        const {
            onConfirmSignUp,
        } = this.props;

        const {
            userName,
            password,
        } = this.state;

        onConfirmSignUp(userName, password, confirmationCode);
    }

    handleSignUpConfirmCancel = () => {
        const {
            onSignOutUnconfirmedUser,
        } = this.props;
        
        onSignOutUnconfirmedUser();
    }

    handleSignUpButtonClick = () => {
        const { onPanelChange } = this.props;
        onPanelChange(SIGNIN_PAGE_VIEW_STATUS.SIGNUP);
    }

    handleForgotPasswordButtonClick = () => {
        const { onPanelChange } = this.props;
        onPanelChange(SIGNIN_PAGE_VIEW_STATUS.FORGOT_PASSWORD);
    }

    loadPanel = (isUserUnconfirmed) => {
        const {
            userName,
            password,
            isShowPasswordField,
        } = this.state;

        if (isUserUnconfirmed) {
            return <SignUpConfirmationPanel
                userName={userName}
                onConfirmationCodeSubmit={this.handleSignUpConfirm}
                onCancel={this.handleSignUpConfirmCancel}/>;
        } else {
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
                                        action={this.handleSignInButtonClick}/>

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
                                    action={this.handleSignUpButtonClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        const { isUserUnconfirmed } = this.props;
        return this.loadPanel(isUserUnconfirmed);
    };
}

const mapDispatchToProps = {
    onSignin: signIn,
    onConfirmSignUp: confirmSignUp,
    onSignOutUnconfirmedUser: signOutUnconfirmedUser,
};

const mapStateToProps = (state) => {
    return {
        isUserUnconfirmed: state.signInPanel.isUserUnconfirmed,
    }
}

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(SignInPanel)
