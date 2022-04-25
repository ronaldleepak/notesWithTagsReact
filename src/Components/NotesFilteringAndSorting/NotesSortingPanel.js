import React from "react"
import { Button } from "Components/Common"
import { LOADING_STATUS, SORTING_CRITERIA } from "Util/Constants"
import { connect } from 'react-redux'
import { updateCriteriaForSorting } from "Actions"

class NotesSortingPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            criteriaForSorting: SORTING_CRITERIA.UPDATED_AT,
        };
    }

    handleCriteriaChange = (event) => {
        
    }

    handleSortingButtonClick = () => {
        const { onSort } = this.props;
        const { criteriaForSorting } = this.state;

        onSort(criteriaForSorting);
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
