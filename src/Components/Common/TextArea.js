import React from "react"
import PropTypes from 'prop-types'

export default class TextArea extends React.Component {
    static propTypes = {
        value: PropTypes.string,
        placeholder: PropTypes.string,
        name: PropTypes.string,
        onChange: PropTypes.func,
    }

    render() {
        var { value, placeholder, name, onChange } = this.props;
        return (
            <div className="block">
                <textarea
                    className="textarea"
                    value={value}
                    placeholder={placeholder}
                    aria-label={name}
                    onChange={onChange}/>
            </div>
        );
    };
}
