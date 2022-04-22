import React from "react"
import PropTypes from 'prop-types'

export default class Card extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        content: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
    }

    render() {
        var { content, name } = this.props;
        return (
            <div className="contents" role="listitem" aria-label={name}>
                {content}
            </div>
        );
    };
}
