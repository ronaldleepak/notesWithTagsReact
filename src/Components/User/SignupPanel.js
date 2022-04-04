import React from "react"
import { connect } from 'react-redux'
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

class SignupPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            confirm: "",
        };
    }

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value});
    }

    handleSigninButtonClick = () => {
        const { onPanelChange } = this.props;
        onPanelChange(LOGIN_PANEL_STATUS.LOGIN);
    }

    handleSignupButtonClick = () => {
        const {
            username,
            email,
            password,
        } = this.state;

        const { onSignup } = this.props;

        onSignup(username, password, email);
    }

    render() {
        const {
            username,
            password,
            email,
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
                            onChange={this.handleInputChange("username")}
                        />
                        <Textfield
                            value={email}
                            placeholder="Email"
                            name="email-input"
                            onChange={this.handleInputChange("email")}
                        />
                        <Textfield
                            value={password}
                            placeholder="Password"
                            name="password-input"
                            isPassword={true}
                            onChange={this.handleInputChange("password")}
                        />
                        <Textfield
                            value={confirm}
                            placeholder="Confirm Password"
                            name="confirm-password-input"
                            isPassword={true}
                            onChange={this.handleInputChange("confirm")}
                        />
                        <Button
                            label="Sign Up"
                            name="signup"
                            buttonStyle={BUTTON_STYLE.SUBMIT}
                            action={this.handleSignupButtonClick}/>

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

const mapDispatchToProps = {
    onSignup: signUp,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(SignupPanel)
