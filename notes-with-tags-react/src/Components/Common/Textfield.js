import React from "react"
import PropTypes from 'prop-types'

export default class Textfield extends React.Component {
    static propTypes = {
        value: PropTypes.string,
        name: PropTypes.string,
        onChange: PropTypes.func,
    }

    render() {
        var { value, name, onChange } = this.props;
        return (
            <div className="block">
                <input
                    className="input"
                    value={value}
                    aria-label={name}
                    onChange={onChange}/>
            </div>    
        );
    };
}
