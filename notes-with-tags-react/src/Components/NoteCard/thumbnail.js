import React from "react"
import { CreatedModifiedDate } from "../Common"
import { VIEW_STATUS } from "../../Util/Constants"

export default class NoteThumbnail extends React.Component {

    handleTitleClick = () => {
        const { onViewChange } = this.props;
        onViewChange(VIEW_STATUS.DETAIL);
    }

    render() {
        const { note } = this.props;

        return (
            <div className="contents">
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
            </div>
        );
    };
}
