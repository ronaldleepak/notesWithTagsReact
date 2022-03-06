import React from "react"
import PropTypes from 'prop-types'

export default class Card extends React.Component {
    static propTypes = {
        name: PropTypes.string,
    }

    render() {
        var { children, name } = this.props;
        return (
            <div className="contents" role="listitem" name={name}>
                {children}
            </div>
        );
    };
}
