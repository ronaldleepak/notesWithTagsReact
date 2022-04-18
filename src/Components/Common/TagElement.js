import React from "react"
import PropTypes from 'prop-types'
import { LinkButton } from "."

export default class TagElement extends React.Component {
    static propTypes = {
        noteTag: PropTypes.object,
        onDelete: PropTypes.func,
    }

    handleDeleteButtonClick = () => {
        const { noteTag, onDelete } = this.props;
        onDelete(noteTag);
    }

    render() {
        const { noteTag, allowEdit } = this.props;
        const tag = noteTag.tag;
        return (
            <div className="control">
                <div className="tags has-addons">
                    <span className="tag is-info">{tag.name}</span>
                    {
                        (allowEdit) ?
                        <LinkButton
                            className="tag is-delete"
                            action={this.handleDeleteButtonClick}
                        /> :
                        ""
                    }
                    
                </div>
            </div>
        );
    };
}
