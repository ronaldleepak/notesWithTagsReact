import React from "react"
import Thumbnail from "./Thumbnail"
import Edit from "./Edit"
import Detail from "./Detail"

const CHANGE_COMPONENT_STATUS = 'CHANGE_COMPONENT_STATUS';

export default class NoteCard extends React.Component {
    state = {
        note: {},
        isComponentStatusThumbnail: true,
        isComponentStatusView: false,
        isComponentStatusEdit: false,
    };

    render() {
        var {
            note,
            isComponentStatusThumbnail,
            isComponentStatusView,
            isComponentStatusEdit,
        } = this.props;
        return (
            <div class="box is-light">
                {(isComponentStatusThumbnail) ? <Thumbnail note={note}/> : null}
                {(isComponentStatusView) ? <Edit note={note}/> : null}
                {(isComponentStatusEdit) ? <Detail note={note}/> : null}
            </div>
        );
    };
}
