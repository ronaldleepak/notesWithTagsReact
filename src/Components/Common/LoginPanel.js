import React from "react"
import {
    Button,
    Textfield,
} from "../Common"
import { login } from "../../Actions"

export default class LoginPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };
    }

    handleUserNameChange = (e) => {
        this.setState({username: e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        var { username, password } = this.state;

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
                    </div>
                </div>
            </div>
        );
    };
}
