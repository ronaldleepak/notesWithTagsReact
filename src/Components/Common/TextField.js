import React from "react"
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TextField extends React.Component {
    static propTypes = {
        value: PropTypes.string,
        placeholder: PropTypes.string,
        name: PropTypes.string,
        isPassword: PropTypes.bool,
        onChange: PropTypes.func,
        onEnterKeyDown: PropTypes.func,
        onFocusOut: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.state = {
            isPasswordVisible: false,
        };
    }

    handleKeyDown = (e) => {
        var { value, onEnterKeyDown } = this.props;
        if (e.key === 'Enter' && onEnterKeyDown) {
            onEnterKeyDown(value);
        }
    }

    handleFocusOut = (e) => {
        var { value, onFocusOut } = this.props;
        if (onFocusOut) {
            onFocusOut(value);
        }
    }

    handlePasswordVisiblityButtonClick = (e) => {
        const { isPasswordVisible } = this.state;
        this.setState({isPasswordVisible: !isPasswordVisible});
    }

    loadInputType = () => {
        const { isPassword } = this.props;
        const { isPasswordVisible } = this.state;

        if (isPassword) {
            if (isPasswordVisible) {
                return "text";
            } else {
                return "password";
            }
        } else {
            return "text";
        }
    }

    loadPasswordVisiblityButton = () => {
        const { isPassword,  } = this.props;
        const { isPasswordVisible } = this.state;

        if (isPassword) {
            if (isPasswordVisible) {
                return (
                    <div className="control">
                        <div
                            className="button"
                            onClick={this.handlePasswordVisiblityButtonClick}>
                            <FontAwesomeIcon icon="eye"/>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="control">
                        <div
                            className="button"
                            onClick={this.handlePasswordVisiblityButtonClick}>
                            <FontAwesomeIcon icon="eye-slash"/>
                        </div>
                    </div>
                );
            }
        } else {
            return null;
        }
    }

    loadBottomMessage = () => {
        const {
            errorMessage,
            verifiedMessage,
        } = this.props;

        if (verifiedMessage) {
            return (
                <p className="content is-small ml-1 has-text-success">
                    {verifiedMessage}
                </p>
            )
        }

        if (errorMessage) {
            return (
                <p className="content is-small ml-1 has-text-danger">
                    {errorMessage}
                </p>
            )
        }

        return null;
    }

    render() {
        const {
            value,
            placeholder,
            name,
            onChange,
            isPassword,
        } = this.props;

        return (
            <div className="block field has-addons">
                <div className="control is-expanded">
                    <input
                        className="input"
                        value={value}
                        type={this.loadInputType()}
                        required={isPassword}
                        placeholder={placeholder}
                        aria-label={name}
                        onChange={onChange}
                        onKeyDown={this.handleKeyDown}
                        onBlur={this.handleFocusOut}/>
                    {this.loadMessage()} 
                </div>
                {this.loadPasswordVisiblityButton()}
            </div>
        );
    };
}
