import React from "react"
import { connect } from 'react-redux'
import {
    Button,
    LinkButton,
} from "."
import { logout } from "Actions"
import { BUTTON_STYLE } from "Util/Constants"

class NavBar extends React.Component {
    
    handleSignoutButtonClick = () => {
        const { onSignout } = this.props;
        onSignout();
    }

    render() {
        const { isUserSignedIn } = this.props;
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
                {(isUserSignedIn) ? (
                    <div className="navbar-end">
                        <div className="block buttons">
                            <Button
                                label="Sign out"
                                name="signout"
                                buttonStyle={BUTTON_STYLE.DANGER}
                                action={this.handleSignoutButtonClick}/>
                        </div>
                    </div>
                ) : null}
            </nav>
        );
    };
}

const mapDispatchToProps = {
    onSignout: logout,
};

const mapStateToProps = (state) => {
    return {
        isUserSignedIn: (state.userAuth.user) !== null,
    }
}

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(NavBar)
