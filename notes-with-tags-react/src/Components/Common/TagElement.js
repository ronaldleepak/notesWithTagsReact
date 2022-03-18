import React from "react"
import PropTypes from 'prop-types'

export default class TagElement extends React.Component {
    static propTypes = {
        tag: PropTypes.object,
        onDelete: PropTypes.func,
    }

    handleDeleteButtonClick = () => {
        var { tag, onDelete } = this.props;
        onDelete(tag);
    }

    render() {
        var { tag } = this.props;
        return (
            <div className="control">
                <div className="tags has-addons">
                    <span className="tag is-info">{tag.name}</span>
                    <a className="tag is-delete" onClick={this.handleDeleteButtonClick}></a>
                </div>
            </div>
        );
    };
}
