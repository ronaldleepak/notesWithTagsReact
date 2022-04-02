import React from "react"
import {
    Button,
    LinkButton,
    Textfield,
} from "../Common"
import { login } from "../../Actions"
import {
    BUTTON_STYLE,
    LOADING_STATUS,
    LOGIN_PANEL_STATUS,
} from "../../Util/Constants"

export default class LoginPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            isShowPasswordField: false,
        };
    }

    handleUserNameChange = (e) => {
        this.setState({username: e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    handleContinueButtonClick = () => {
        this.setState({isShowPasswordField: true})
    }

    handleSigninButtonClick = () => {

    }

    handleSignupButtonClick = () => {
        const { onPanelChange } = this.props;
        onPanelChange(LOGIN_PANEL_STATUS.SIGNUP);
    }

    render() {
        var {
            username,
            password,
            isShowPasswordField,
        } = this.state;

        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-4">
                    <div className="box">
                        <Textfield
                            value={username}
                            placeholder="User name"
                            name="username-input"
                            onChange={this.handleUserNameChange}
                        />
                        {(isShowPasswordField) ? (
                            <div>
                                <Textfield
                                    value={password}
                                    placeholder="Password"
                                    name="password-input"
                                    isPassword={true}
                                    onChange={this.handlePasswordChange}
                                />
                                <Button
                                    label="Sign in"
                                    name="signin"
                                    buttonStyle={BUTTON_STYLE.SUBMIT}
                                    isLoading={this.props.loadingStatus === LOADING_STATUS.LOADING}
                                    action={this.handleSigninButtonClick}/>
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
