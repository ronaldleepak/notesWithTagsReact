import React from "react"
import PropTypes from 'prop-types'
import { LinkButton } from "."

export default class NoteTagElement extends React.Component {
    static propTypes = {
        noteTag: PropTypes.object,
        onNoteTagDelete: PropTypes.func,
        isAllowingEdit: PropTypes.bool,
    }

    handleDeleteButtonClick = () => {
        const { noteTag, onNoteTagDelete } = this.props;
        onNoteTagDelete(noteTag);
    }

    render() {
        const { noteTag, isAllowingEdit } = this.props;
        const tag = noteTag.tag;
        return (
            <div className="control">
                <div className="tags has-addons">
                    <span className="tag is-info">{tag.name}</span>
                    {
                        (isAllowingEdit) ?
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
