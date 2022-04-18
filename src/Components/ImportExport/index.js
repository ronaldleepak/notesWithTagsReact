import React from "react"
import { Button, MessageBox } from "Components/Common"
import { LOADING_STATUS } from "Util/Constants"
import { connect } from 'react-redux'
import { exportNotes, importNotes } from "Actions"

class ImportExport extends React.Component {

    handleImportButtonClick = (event) => {
        const { onImportButtonClick } = this.props;
        onImportButtonClick(event.file)
    }

    handleExportButtonClick = (event) => {
        const { onExportButtonClick } = this.props;
        onExportButtonClick()
    }

    render() {
        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-9">
                    <MessageBox component="importExport"/>
                    <div className="block buttons">
                        <Button
                            label="Import .json file"
                            name="import-notes"
                            isLoading={this.props.loadingStatus === LOADING_STATUS.LOADING}
                            isFileImport={true}
                            action={this.handleImportButtonClick}/>
                        <Button
                            label="Export .json file"
                            name="export-notes"
                            isLoading={this.props.loadingStatus === LOADING_STATUS.LOADING}
                            action={this.handleExportButtonClick}/>
                    </div>
                </div>
            </div>
        );
    };
}

const mapDispatchToProps = {
    onImportButtonClick: importNotes,
    onExportButtonClick: exportNotes,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(ImportExport)
