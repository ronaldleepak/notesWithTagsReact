import React from "react"
import { SelectDropdown } from "Components/Common"
import { LOADING_STATUS, SORTING_CRITERIA } from "Util/Constants"
import { connect } from 'react-redux'
import { updateCriteriaForSorting } from "Actions"

const {
    CREATED_AT,
    UPDATED_AT,
    HEADER,
} = SORTING_CRITERIA;
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
            <SelectDropdown
                name="sorting"
                options={[
                    {title: "Updated at", value: UPDATED_AT},
                    {title: "Created at", value: CREATED_AT},
                    {title: "Header", value: HEADER},
                ]}
                action={this.handleCriteriaChange}
            />
        );
    };
}

const mapDispatchToProps = {
    onSort: updateCriteriaForSorting,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(NotesSortingPanel)
