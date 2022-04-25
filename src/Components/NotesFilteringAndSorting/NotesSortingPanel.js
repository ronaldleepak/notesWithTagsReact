import React from "react"
import { Button } from "Components/Common"
import { LOADING_STATUS } from "Util/Constants"
import { connect } from 'react-redux'
import { updateCriteriaForSorting } from "Actions"

class NotesSortingPanel extends React.Component {

    handleCriteriaChange = (event) => {
        
    }

    handleSortingButtonClick = (event) => {
        
    }

    render() {
        return (
            <div>
                
            </div>
        );
    };
}

const mapDispatchToProps = {
    onSort: updateCriteriaForSorting,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(NotesSortingPanel)
