import React from "react"
import { NotesDate, Card } from "Components/Common"
import { NOTE_CARD_VIEW_STATUS } from "Util/Constants"

export default class NoteThumbnailPanel extends React.Component {

    handleTitleClick = () => {
        const { onViewChange } = this.props;
        onViewChange(NOTE_CARD_VIEW_STATUS.DETAIL);
    }

    render() {
        const { note } = this.props;

        return (
            <Card name="note-thumbnail">
                <div className="columns">
                    <div className="column is-8">
                        <h2 className="title is-2" onClick={this.handleTitleClick}>
                            {(note.header === "") ? "Untitled" : note.header}
                        </h2>
                    </div>
                    <div className="column is-4">
                        <NotesDate note={note}/>
                    </div>
                </div>
            </Card>
        );
    };
}
