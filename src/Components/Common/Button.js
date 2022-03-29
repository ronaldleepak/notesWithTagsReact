import React from "react"
import PropTypes from 'prop-types'
import { uid } from '../../Util/Util'
import { BUTTON_STYLE } from "../../Util/Constants"

const {
    NORMAL,
    SUBMIT,
    DANGER,
} = BUTTON_STYLE;

export default class Button extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string,
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

    render() {
        var {
            label,
            name,
            action,
            buttonStyle,
            isLoading,
            isFileImport,
        } = this.props;

        const className = `button is-light
                        ${this.buttonStyleToBulmaClass(buttonStyle)}
                        ${this.buttonIsLoading(isLoading)}`;

        return <button
            aria-label={name}
            className={className}
            onClick={action}>
            {label}
        </button>
    };
}
