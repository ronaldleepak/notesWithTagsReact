import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButton from "./LinkButton";

export default class MessageBox extends React.Component {

    handleMessageBoxClose = () => {
        const { onMessageBoxClose } = this.props;
        onMessageBoxClose();
    }

    render() {
        const { message } = this.props;
        return (
            <div className="field has-addons has-background-danger-light py-2">
                <div className="control is-expanded has-text-danger ml-2">
                    {message}
                </div>
                <div className="control">
                    <LinkButton
                        className="mr-2"
                        action={this.handleMessageBoxClose}
                        label={(
                            <FontAwesomeIcon className="has-text-danger" icon="xmark"/>
                        )}/>
                </div>
            </div>
        );
    };
}
