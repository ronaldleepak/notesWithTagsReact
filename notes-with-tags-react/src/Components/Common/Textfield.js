import React from "react"
import PropTypes from 'prop-types'

export default class Textfield extends React.Component {
    static propTypes = {
        value: PropTypes.string,
        name: PropTypes.string,
        onChange: PropTypes.func,
        onEnterKeyDown: PropTypes.func,
        onFocusout: PropTypes.func,
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

    render() {
        var { value, name, onChange } = this.props;
        return (
            <div className="block">
                <input
                    className="input"
                    value={value}
                    aria-label={name}
                    onChange={onChange}
                    onKeyDown={this.handleKeyDown}
                    onBlur={this.handleBlur}/>
            </div>    
        );
    };
}
