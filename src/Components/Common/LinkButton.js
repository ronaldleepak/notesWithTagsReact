import React from "react"
import PropTypes from 'prop-types'
import { BUTTON_STYLE } from "../../Util/Constants"

const {
    NORMAL,
    SUBMIT,
    DANGER,
} = BUTTON_STYLE;

export default class LinkButton extends React.Component {
    static propTypes = {
        label: PropTypes.object,
        name: PropTypes.string,
        className: PropTypes.string,
        href: PropTypes.string,
        action: PropTypes.func,
        buttonStyle: PropTypes.string,
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

    handleLinkButtonClick = (event) => {
        const { action } = this.props;

        event.stopPropagation();
        event.preventDefault();

        action(event);
    }

    render() {
        var {
            label,
            name,
            className,
            href,
            buttonStyle,
        } = this.props;

        const linkClassName = `is-light
                        ${this.buttonStyleToBulmaClass(buttonStyle)}
                        ${className}`;

        return (
            <a
                href={href}
                aria-label={name}
                className={linkClassName}
                onClick={this.handleLinkButtonClick}>
                {label}
            </a>
        );
    };
}
