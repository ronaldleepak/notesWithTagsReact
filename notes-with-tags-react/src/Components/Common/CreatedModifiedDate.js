import React from "react"

export default class CreatedModifiedDate extends React.Component {
    render() {
        var { createdDate, modifiedDate } = this.props;
        return (
            <div class="block">
                <p>Created Time: {createdDate.toLocaleString('en-GB')}</p>
                <p>Last Modified Time: {modifiedDate.toLocaleString('en-GB')}</p>
            </div>
        );
    };
}
