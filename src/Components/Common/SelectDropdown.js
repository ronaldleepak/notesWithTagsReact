import React from "react"
import PropTypes from 'prop-types'

export default class SelectDropdown extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.any,
                title: PropTypes.string,
            })
        ),
        action: PropTypes.func,
    }

    render() {
        var { name, options } = this.props;
        return (
            <div className="select" aria-label={name}>
                <select>
                {
                    options.map((option, i) => {
                        const key = name + "_option_" + i;
                        const { value, title } = option;
                        return (
                            <option key={key} value={value}>
                                {title}
                            </option>
                        )
                    })
                }
                </select>
            </div>
        );
    };
}
