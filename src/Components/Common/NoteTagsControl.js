import React from "react"
import PropTypes from 'prop-types'
import { TextField } from "."
import TagElement from "./NoteTagElement"
import { NoteTags, Tag } from "models";
import _ from 'lodash-es'

export default class NoteTagsControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput: "",
        };
    }

    static propTypes = {
        noteTags: PropTypes.array,
        onNoteTagAdded: PropTypes.func,
        onNoteTagDeleted: PropTypes.func,
        isAllowingEdit: PropTypes.bool,
    }

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value});
    }

    handleNoteTagCreation = (textInput) => {
        const { noteTags, onNoteTagAdded } = this.props;

        if (textInput !== "") {
            const existingNoteTag = _.find(noteTags, function(noteTag) { return noteTag.tag.name === textInput });

            this.clearTextField();
            if (existingNoteTag == null) {
                const newNoteTag = new NoteTags({
                    tag: new Tag({
                        name: textInput
                    })
                })
                onNoteTagAdded(newNoteTag);
            }
        }
    }

    handleNoteTagDeletion = (deletedNoteTag) => {
        const { onNoteTagDeleted } = this.props;
        onNoteTagDeleted(deletedNoteTag);
    }

    clearTextField = () => {
        this.setState({textInput: ""})
    }

    render() {
        const { noteTags, isAllowingEdit } = this.props;
        const { textInput } = this.state;
        
        return (
            <div className="block">
                {
                    (isAllowingEdit) ?
                    <TextField
                        value={textInput}
                        placeholder="Add New Tag Here"
                        name="new-tag-input"
                        onChange={this.handleInputChange("textInput")}
                        onEnterKeyDown={this.handleNoteTagCreation}
                        onFocusOut={this.handleNoteTagCreation}
                    /> :
                    ""
                }
                <div className="field is-grouped is-grouped-multiline">
                {
                    noteTags.map(noteTag => {
                        return (
                            <TagElement
                                noteTag={noteTag}
                                isAllowingEdit={isAllowingEdit}
                                key={noteTag.id}
                                onNoteTagDelete={this.handleNoteTagDeletion}
                            />
                        )
                    })
                }
                </div>
            </div>
        );
    };
}
