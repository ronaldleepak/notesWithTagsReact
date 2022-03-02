import React from "react"
import PropTypes from 'prop-types'
import { uid } from '../../Util/Util'

export default class ButtonGroup extends React.Component {
    static propTypes = {
        buttons: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            action: PropTypes.func,
            bulmaClassName: PropTypes.string,
        }))
    }

    render() {
        var { buttons } = this.props;
        return (
            <div className="block buttons">
            {
                buttons.map((button) => {
                    const className = "button is-light " + button.bulmaClassName;
                    const key = "button_" + uid();
                    return (
                        <button key={key} className={className} onClick={button.action}>
                            {button.label}
                        </button>
                    )
                })
            }
            </div>
        );
    };
}
