import React from "react"
import { NewLineText, CreatedModifiedDate } from "../Common"

export default class NoteDetail extends React.Component {
    render() {
        var { note } = this.props;
        return (
            <div className="contents">
                <div className="columns">
                    <div className="column is-8">
                        <h2 className="title is-2">{note.header}</h2>
                    </div>
                    <div className="column is-4">
                        <CreatedModifiedDate
                            createdDate={note.createdDate}
                            modifiedDate={note.modifiedDate}/>
                    </div>
                </div>
                <NewLineText text={note.content}/>
                <div className="block">
                    <button className="button">EDIT</button>
                </div>
            </div>

        );
    };
}
