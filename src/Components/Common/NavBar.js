import React from "react"
import {
    Button,
    LinkButton,
} from "../Common"
import { BUTTON_STYLE } from "../../Util/Constants"
import { Auth } from 'aws-amplify';

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export default class NavBar extends React.Component {
    
    handleLogoutButtonClick = () => {
        signOut()
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-start">
                    <LinkButton
                        label="Notes With Tags"
                        href="https://main.d2rmt4hjoafnuc.amplifyapp.com"
                        className="navbar-item"
                    />
                    <LinkButton
                        label="About Me"
                        href="https://pakholeeronald.net"
                        className="navbar-item"
                    />
                </div>
                <div className="navbar-end">
                    <div className="block buttons">
                        <Button
                            label="Logout"
                            name="logout"
                            buttonStyle={BUTTON_STYLE.DANGER}
                            action={this.handleLogoutButtonClick}/>
                    </div>
                </div>
            </nav>
        );
    };
}
