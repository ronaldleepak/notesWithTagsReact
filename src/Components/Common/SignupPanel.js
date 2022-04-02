import React from "react"
import {
    Button,
    LinkButton,
    Textfield,
} from "../Common"
import { signUp } from "../../Actions"
import {
    BUTTON_STYLE,
    LOADING_STATUS,
    LOGIN_PANEL_STATUS,
} from "../../Util/Constants"

export default class SignupPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            confirm: "",
        };
    }

    handleUserNameChange = (e) => {
        this.setState({username: e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    handleConfirmPasswordChange = (e) => {
        this.setState({confirm: e.target.value})
    }

    handleContinueButtonClick = () => {
        this.setState({isShowPasswordField: true})
    }

    handleSigninButtonClick = () => {
        const { onPanelChange } = this.props;
        onPanelChange(LOGIN_PANEL_STATUS.LOGIN);
    }

    handleSignupButtonClick = () => {

    }

    render() {
        var {
            username,
            password,
            confirm,
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
                        <Textfield
                            value={password}
                            placeholder="Password"
                            name="password-input"
                            isPassword={true}
                            onChange={this.handlePasswordChange}
                        />
                        <Textfield
                            value={confirm}
                            placeholder="Confirm Password"
                            name="confirm-password-input"
                            isPassword={true}
                            onChange={this.handleConfirmPasswordChange}
                        />
                        <Button
                            label="Continue"
                            name="continue"
                            buttonStyle={BUTTON_STYLE.SUBMIT}
                            action={this.handleContinueButtonClick}/>

                        <div className="mt-6">
                            <p>
                                Already have an account?
                            </p>
                            <LinkButton
                                label="Sign in"
                                name="signin"
                                action={this.handleSigninButtonClick}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
