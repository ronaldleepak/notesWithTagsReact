import React from "react"
import NoteThumbnailPanel from "./NoteThumbnailPanel"
import NoteEditorPanel from "./NoteEditorPanel"
import NoteDetailPanel from "./NoteDetailPanel"
import { NOTE_CARD_VIEW_STATUS } from "Util/Constants"

const {
    THUMBNAIL,
    DETAIL,
    EDITOR,
} = NOTE_CARD_VIEW_STATUS;

export default class NoteCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            viewStatus: (this.props.isNew === true) ? EDITOR : THUMBNAIL,
        };
    }

    handleViewChange = (viewStatus) => {
        this.setState({
            viewStatus: viewStatus,
        })
    }

    loadCardContent = (viewStatus, note) => {
        switch (viewStatus) {
            case THUMBNAIL:
                return (
                    <NoteThumbnailPanel
                        note={note}
                        onViewChange={this.handleViewChange}/>
                )
            case DETAIL:
                return (
                    <NoteDetailPanel
                        note={note}
                        onViewChange={this.handleViewChange}/>
                )
            case EDITOR:
                return (
                    <NoteEditorPanel
                        note={note}
                        onViewChange={this.handleViewChange}/>
                )
            default:
                return null;
        }
    }

    render() {
        const {
            note,
        } = this.props;

        const {
            viewStatus,
        } = this.state;
        
        return (
            <div className="card my-5">
                <div className="card-content">
                    {this.loadCardContent(viewStatus, note)}
                </div>
            </div>
        );
    };
}
