import React from "react"
import PropTypes from 'prop-types'
import { uid } from '../../Util/Util'
import { BUTTON_STYLE } from "../../Util/Constants"

const {
    NORMAL,
    SUBMIT,
    DANGER,
} = BUTTON_STYLE;

export default class ButtonGroup extends React.Component {
    static propTypes = {
        buttons: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            name: PropTypes.string,
            action: PropTypes.func,
            buttonStyle: PropTypes.string,
            isLoading: PropTypes.bool,
        }))
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
        var { buttons } = this.props;
        return (
            <div className="block buttons">
            {
                buttons.map((button) => {
                    const className = `button is-light
                        ${this.buttonStyleToBulmaClass(button.buttonStyle)}
                        ${this.buttonIsLoading(button.isLoading)}`;
                    const key = "button_" + uid();
                    return (
                        <button
                            aria-label={button.name}
                            key={key}
                            className={className}
                            onClick={button.action}>
                            {button.label}
                        </button>
                    )
                })
            }
            </div>
        );
    };
}
