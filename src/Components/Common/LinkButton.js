import React from "react"
import PropTypes from 'prop-types'
import { BUTTON_STYLE } from "Util/Constants"

const {
    NORMAL,
    SUBMIT,
    DANGER,
} = BUTTON_STYLE;

export default class LinkButton extends React.Component {
    static propTypes = {
        label: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
        name: PropTypes.string,
        className: PropTypes.string,
        href: PropTypes.string,
        action: PropTypes.func,
        buttonStyle: PropTypes.string,
    }

    loadBulmaClassName = (buttonStyle) => {
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

    handleButtonClick = (event) => {
        const { action } = this.props;

        event.stopPropagation();
        event.preventDefault();

        action(event);
    }

    render() {
        const {
            label,
            name,
            className,
            href,
            buttonStyle,
        } = this.props;

        const bulmaClassName = `is-light
                        ${this.loadBulmaClassName(buttonStyle)}
                        ${className}`;

        return (
            <a
                href={href}
                aria-label={name}
                className={bulmaClassName}
                onClick={this.handleButtonClick}>
                {label}
            </a>
        );
    };
}
