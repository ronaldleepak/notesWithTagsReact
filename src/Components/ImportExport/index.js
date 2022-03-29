import React from "react"
import { Button } from "../Common"

export default class ImportExport extends React.Component {
    state = {
        notes: [],
    };

    handleImportButtonClick = (e) => {
    }

    handleExportButtonClick = (e) => {
    }

    render() {
        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-9">
                    <div className="block buttons">
                        <Button
                            label="Import .NWT file"
                            name="import-notes"
                            isLoading={this.props.loadingStatus === LOADING_STATUS.LOADING}
                            isFileImport={true}
                            action={this.handleImportButtonClick}/>
                        <Button
                            label="Export .NWT file"
                            name="export-notes"
                            isLoading={this.props.loadingStatus === LOADING_STATUS.LOADING}
                            action={this.handleExportButtonClick}/>
                    </div>
                </div>
            </div>
        );
    };
}
