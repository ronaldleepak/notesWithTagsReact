import React from "react"
import { ButtonGroup } from "../Common"
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
                    <a className="navbar-item">
                        Notes With Tags
                    </a>
                    <a className="navbar-item" href="https://pakholeeronald.net">
                        About Me
                    </a>
                </div>
                <div className="navbar-end">
                    <ButtonGroup buttons={[
                        {
                            label: "Logout",
                            name: "logout",
                            buttonStyle: BUTTON_STYLE.DANGER,
                            action: this.handleLogoutButtonClick,
                        },
                    ]}/>
                </div>
            </nav>
        );
    };
}
