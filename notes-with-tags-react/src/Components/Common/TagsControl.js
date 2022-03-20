import React from "react"
import PropTypes from 'prop-types'
import { Textfield } from "."
import TagElement from "./TagElement"
import { NoteTags, Tag } from "../../models";

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

    handleTextInputChange = (e) => {
        this.setState({textInput: e.target.value})
    }

    handleNewTagSubmit = (textInput) => {
        const { onTagAdded } = this.props;
        const newNoteTag = new NoteTags({
            tag: new Tag({
                name: textInput
            })
        })
        this.setState({textInput: ""})
        onTagAdded(newNoteTag);
    }

    handleDeleteTag = (deletedNoteTag) => {
        const { onTagDeleted } = this.props;
        onTagDeleted(deletedNoteTag);
    }

    render() {
        const { noteTags } = this.props;
        const { textInput } = this.state;
        
        return (
            <div className="block">
                <Textfield
                    value={textInput}
                    name="new-tag-input"
                    onChange={this.handleTextInputChange}
                    onEnterKeyDown={this.handleNewTagSubmit}
                />
                <div className="field is-grouped is-grouped-multiline">
                {
                    noteTags.map(noteTag => {
                        return (
                            <TagElement noteTag={noteTag} key={noteTag.id} onDelete={this.handleDeleteTag}/>
                        )
                    })
                }
                </div>
            </div>
        );
    };
}
