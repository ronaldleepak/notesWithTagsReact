import React from "react"
import NewLineText from "../Common/NewLineText"

export default class NoteDetail extends React.Component {
    state = {
        note: {},
        content: '',
        header: '',  
        createDateString: '',
        modifyDateString: '',
    };

    render() {
        var { header, content, createDateString, modifyDateString } = this.props;
        return (
            <div class="contents">
                <div class="columns">
                    <div class="column is-8">
                        <h2 class="title is-2">{header}</h2>
                    </div>
                    <div class="column is-4">
                        <div class="block">
                            <p>Created Time: {createDateString}</p>
                            <p>Last Modified Time: {modifyDateString}</p>
                        </div>
                    </div>
                </div>
                <NewLineText text={content}/>
                <div class="block">
                    <button class="button">EDIT</button>
                </div>
            </div>

        );
    };
}
