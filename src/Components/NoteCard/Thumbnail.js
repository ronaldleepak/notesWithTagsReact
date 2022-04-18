import React from "react"
import { CreatedModifiedDate, Card } from "Components/Common"
import { VIEW_STATUS } from "Util/Constants"

export default class NoteThumbnail extends React.Component {

    handleTitleClick = () => {
        const { onViewChange } = this.props;
        onViewChange(VIEW_STATUS.DETAIL);
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
                        <CreatedModifiedDate
                            createdDate={note.createdAt}
                            modifiedDate={note.updatedAt}/>
                    </div>
                </div>
            </Card>
        );
    };
}
