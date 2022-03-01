import React from "react"
import { NewLineText, CreatedModifiedDate } from "../Common"

export default class NoteDetail extends React.Component {
    render() {
        var { note } = this.props;
        return (
            <div class="contents">
                <div class="columns">
                    <div class="column is-8">
                        <h2 class="title is-2">{note.header}</h2>
                    </div>
                    <div class="column is-4">
                        <CreatedModifiedDate
                            createdDate={note.createdDate}
                            modifiedDate={note.modifiedDate}/>
                    </div>
                </div>
                <NewLineText text={note.content}/>
                <div class="block">
                    <button class="button">EDIT</button>
                </div>
            </div>

        );
    };
}
