import React from "react"
import {
    NewLineText,
    CreatedModifiedDate,
    ButtonGroup,
    Card,
} from "../Common"
import { VIEW_STATUS } from "../../Util/Constants"

export default class NoteDetail extends React.Component {

    handleTitleClick = () => {
        const { onViewChange } = this.props;
        onViewChange(VIEW_STATUS.THUMBNAIL);
    }

    handleEditButtonClick = () => {
        const { onViewChange } = this.props;
        onViewChange(VIEW_STATUS.EDIT);
    }

    buttons = [
        {
            label: "Edit",
            name: "edit-note",
            action: this.handleEditButtonClick
        },
    ]

    render() {
        var { note } = this.props;

        return (
            <Card name="note-detail">
                <div className="columns">
                    <div className="column is-8">
                        <h2 className="title is-2" onClick={this.handleTitleClick}>
                            {note.header}
                        </h2>
                    </div>
                    <div className="column is-4">
                        <CreatedModifiedDate
                            createdDate={note.createdDate}
                            modifiedDate={note.modifiedDate}/>
                    </div>
                </div>
                <NewLineText text={note.content}/>
                <ButtonGroup buttons={this.buttons}/>
            </Card>
        );
    };
}
