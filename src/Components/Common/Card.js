import React from "react"
import PropTypes from 'prop-types'

export default class Card extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
    }

    render() {
        var { children, name } = this.props;
        return (
            <div className="contents" role="listitem" aria-label={name}>
                {children}
            </div>
        );
    };
}
