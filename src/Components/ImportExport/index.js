import React from "react"
import { Button, ErrorMessageBox } from "Components/Common"
import { LOADING_STATUS } from "Util/Constants"
import { connect } from 'react-redux'
import { exportNotes, importNotes } from "Actions"

class NotesImportExportPanel extends React.Component {

    handleImportButtonClick = (event) => {
        const { onImport } = this.props;
        onImport(event.file)
    }

    handleExportButtonClick = (event) => {
        const { onExport } = this.props;
        onExport()
    }

    render() {
        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-9">
                    <ErrorMessageBox refName="importExport"/>
                    <div className="block buttons">
                        <Button
                            label="Import .json file"
                            name="import-notes"
                            isLoading={this.props.loadingStatus === LOADING_STATUS.LOADING}
                            isFileImportFunctionActive={true}
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
    onImport: importNotes,
    onExport: exportNotes,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(NotesImportExportPanel)
