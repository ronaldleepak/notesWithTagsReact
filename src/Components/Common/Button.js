import React from "react"
import PropTypes from 'prop-types'
import { BUTTON_STYLE } from "Util/Constants"

const {
    NORMAL,
    SUBMIT,
    DANGER,
} = BUTTON_STYLE;

export default class Button extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string,
        className: PropTypes.string,
        action: PropTypes.func,
        buttonStyle: PropTypes.string,
        isLoading: PropTypes.bool,
        isFileImport: PropTypes.bool,
    }

    buttonStyleToBulmaClass = (buttonStyle) => {
        switch (buttonStyle) {
            case NORMAL:
                return "";
            case SUBMIT:
                return "is-success";
            case DANGER:
                return "is-danger";
            default:
                return "";
        }
    }

    buttonIsLoading = (isLoading) => {
        return isLoading ? "is-loading" : "";
    }

    handleButtonClick = (event) => {
        const { action, isFileImport } = this.props;

        if (isFileImport) {
            const file = event.target.files[0];
            event.file = file;
        } else {
            event.stopPropagation();
            event.preventDefault();
        }

        action(event);
    }

    render() {
        const {
            label,
            name,
            className,
            buttonStyle,
            isLoading,
            isFileImport,
        } = this.props;

        const buttonClassName = `button is-light mr-4
                        ${this.buttonStyleToBulmaClass(buttonStyle)}
                        ${this.buttonIsLoading(isLoading)}
                        ${className}`;

        return (
            <div>
                {(isFileImport) ? (
                    <input
                        type="file"
                        ref={(ref) => this.upload = ref}
                        style={{display: "none"}}
                        onChange={this.handleButtonClick.bind(this)}
                    />
                ) : null}
                <button
                    aria-label={name}
                    className={buttonClassName}
                    onClick={(isFileImport) ? () => {this.upload.click()} : this.handleButtonClick}>
                    {label}
                </button>
            </div>
        );
    };
}
