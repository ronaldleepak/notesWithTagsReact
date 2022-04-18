import React from "react"
import Thumbnail from "./Thumbnail"
import Edit from "./Edit"
import Detail from "./Detail"
import { VIEW_STATUS } from "Util/Constants"

const {
    THUMBNAIL,
    DETAIL,
    EDIT,
} = VIEW_STATUS;

export default class NoteCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            viewStatus: (this.props.isNew === true) ? EDIT : THUMBNAIL,
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
                return <Thumbnail note={note} onViewChange={this.handleViewChange}/>
            case DETAIL:
                return <Detail note={note} onViewChange={this.handleViewChange}/>
            case EDIT:
                return <Edit note={note} onViewChange={this.handleViewChange}/>
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
