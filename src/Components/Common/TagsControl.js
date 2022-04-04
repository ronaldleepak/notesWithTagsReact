import React from "react"
import PropTypes from 'prop-types'
import { Textfield } from "."
import TagElement from "./TagElement"
import { NoteTags, Tag } from "../../models";
import _ from 'lodash-es'

export default class TagsControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput: "",
        };
    }

    static propTypes = {
        noteTags: PropTypes.array,
        onTagAdded: PropTypes.func,
        onTagDeleted: PropTypes.func,
    }

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value});
    }

    handleNewTagSubmit = (textInput) => {
        const { noteTags, onTagAdded } = this.props;

        if (textInput !== "") {
            const existingTag = _.find(noteTags, function(noteTag) { return noteTag.tag.name === textInput });

            this.clearTextField();
            if (existingTag == null) {
                const newNoteTag = new NoteTags({
                    tag: new Tag({
                        name: textInput
                    })
                })
                onTagAdded(newNoteTag);
            }
        }
    }

    handleDeleteTag = (deletedNoteTag) => {
        const { onTagDeleted } = this.props;
        onTagDeleted(deletedNoteTag);
    }

    clearTextField = () => {
        this.setState({textInput: ""})
    }

    render() {
        const { noteTags, allowEdit } = this.props;
        const { textInput } = this.state;
        
        return (
            <div className="block">
                {
                    (allowEdit) ?
                    <Textfield
                        value={textInput}
                        placeholder="Add New Tag Here"
                        name="new-tag-input"
                        onChange={this.handleInputChange("textInput")}
                        onEnterKeyDown={this.handleNewTagSubmit}
                        onFocusout={this.handleNewTagSubmit}
                    /> :
                    ""
                }
                <div className="field is-grouped is-grouped-multiline">
                {
                    noteTags.map(noteTag => {
                        return (
                            <TagElement
                                noteTag={noteTag}
                                allowEdit={allowEdit}
                                key={noteTag.id}
                                onDelete={this.handleDeleteTag}
                            />
                        )
                    })
                }
                </div>
            </div>
        );
    };
}
