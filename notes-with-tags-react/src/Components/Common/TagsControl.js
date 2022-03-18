import React from "react"
import PropTypes from 'prop-types'
import { Textfield } from "."
import TagElement from "./TagElement"
import { Tag } from "../../models";

export default class TagsControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput: "",
        };
    }

    static propTypes = {
        tags: PropTypes.array,
        onTagsChange: PropTypes.func,
    }

    handleTextInputChange = (e) => {
        this.setState({textInput: e.target.value})
    }

    handleNewTagSubmit = (textInput) => {
        const { onTagsChange, tags } = this.props;
        const newTag = new Tag({
            name: textInput
        })
        const newTags = [newTag, ...tags];
        this.setState({textInput: ""})
        onTagsChange(newTags);
    }

    handleDeleteTag = (deleteTag) => {
        const { onTagsChange, tags } = this.props;
        const newTags = tags.filter( tag => tag.id !== deleteTag.id )
        onTagsChange(newTags);
    }

    render() {
        const { tags } = this.props;
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
                    tags.map(tag => {
                        return (
                            <TagElement tag={tag} key={tag.id} onDelete={this.handleDeleteTag}/>
                        )
                    })
                }
                </div>
            </div>
        );
    };
}
