import React from "react"

export default class CreatedModifiedDate extends React.Component {
    render() {
        var { createdDate, modifiedDate } = this.props;
        createdDate = new Date(createdDate);
        modifiedDate = new Date(modifiedDate);
        return (
            <div className="content has-text-grey-light is-small">
                <div>Created Time: {createdDate.toLocaleString('en-GB')}</div>
                <div>Last Modified Time: {modifiedDate.toLocaleString('en-GB')}</div>
            </div>
        );
    };
}
