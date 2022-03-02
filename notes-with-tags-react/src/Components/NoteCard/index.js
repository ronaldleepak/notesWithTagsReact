import React from "react"
import Thumbnail from "./Thumbnail"
import Edit from "./Edit"
import Detail from "./Detail"

const CHANGE_COMPONENT_STATUS = 'CHANGE_COMPONENT_STATUS';

export default class NoteCard extends React.Component {
    state = {
        isComponentStatusThumbnail: true,
        isComponentStatusView: false,
        isComponentStatusEdit: false,
    };

    render() {
        var {
            note,
        } = this.props;

        var {
            isComponentStatusThumbnail,
            isComponentStatusView,
            isComponentStatusEdit,
        } = this.state;
        
        return (
            <div class="box is-light">
                {(isComponentStatusThumbnail) ? <Thumbnail note={note}/> : null}
                {(isComponentStatusView) ? <Edit note={note}/> : null}
                {(isComponentStatusEdit) ? <Detail note={note}/> : null}
            </div>
        );
    };
}
