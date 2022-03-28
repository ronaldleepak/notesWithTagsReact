import React from "react"
import { Button } from "../Common"
import { LOADING_STATUS } from "../../Util/Constants"
import { connect } from 'react-redux'
import { exportNotes, importNotes } from "../../Actions"

class ImportExport extends React.Component {

    handleImportButtonClick = (e) => {
        const { onImportButtonClick } = this.props;
        onImportButtonClick()
    }

    handleExportButtonClick = (e) => {
        const { onExportButtonClick } = this.props;
        onExportButtonClick()
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

const mapDispatchToProps = {
    onImportButtonClick: importNotes,
    onExportButtonClick: exportNotes,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(ImportExport)
