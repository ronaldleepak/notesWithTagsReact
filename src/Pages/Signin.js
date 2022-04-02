import React from "react"
import { LoginPanel, SignupPanel } from "../Components/Common"
import { LOGIN_PANEL_STATUS } from "../Util/Constants"

const {
    LOGIN,
    SIGNUP,
} = LOGIN_PANEL_STATUS;

class SigninPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            panelStatus: LOGIN,
        };
    }

    handlePanelChange = (panelStatus) => {
        this.setState({
            panelStatus: panelStatus,
        })
    }

    loadPanel = (panelStatus) => {
        switch (panelStatus) {
            case LOGIN:
                return <LoginPanel onPanelChange={this.handlePanelChange}/>
            case SIGNUP:
                return <SignupPanel onPanelChange={this.handlePanelChange}/>
            default:
                return null;
        }
    }

    render() {
        const { panelStatus } = this.state;
        return (
            <div className="pt-5">
                <div className="block has-text-centered">
                    <h1 className="title is-1">
                        Welcome to NotesWithTags!
                    </h1>
                </div>
                <div>
                    {this.loadPanel(panelStatus)}
                </div>
            </div>
        );
    };
}
export default SigninPage
