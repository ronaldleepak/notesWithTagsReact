import React from "react"
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Textfield extends React.Component {
    static propTypes = {
        value: PropTypes.string,
        placeholder: PropTypes.string,
        name: PropTypes.string,
        isPassword: PropTypes.bool,
        onChange: PropTypes.func,
        onEnterKeyDown: PropTypes.func,
        onFocusout: PropTypes.func,
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

    handleBlur = (e) => {
        var { value, onFocusout } = this.props;
        if (onFocusout) {
            onFocusout(value);
        }
    }

    handlePasswordVisibleClick = (e) => {
        console.log("test")
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

    loadPasswordVisibleButton = () => {
        const { isPassword,  } = this.props;
        const { isPasswordVisible } = this.state;

        if (isPassword) {
            if (isPasswordVisible) {
                return (
                    <div className="control">
                        <div
                            className="button"
                            onClick={this.handlePasswordVisibleClick}>
                            <FontAwesomeIcon icon="eye"/>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="control">
                        <div
                            className="button"
                            onClick={this.handlePasswordVisibleClick}>
                            <FontAwesomeIcon icon="eye-slash"/>
                        </div>
                    </div>
                );
            }
        } else {
            return null;
        }
    }

    render() {
        var {
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
                        onBlur={this.handleBlur}/>
                </div>
                {this.loadPasswordVisibleButton()}
            </div>    
        );
    };
}
