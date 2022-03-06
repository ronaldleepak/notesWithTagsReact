import React from "react"
import PropTypes from 'prop-types'

export default class Card extends React.Component {
    static propTypes = {
        content: PropTypes.element,
        name: PropTypes.string,
    }

    render() {
        var { content, name } = this.props;
        return (
            <div className="contents" role="listitem" name={name}>
                {content}
            </div>
        );
    };
}
