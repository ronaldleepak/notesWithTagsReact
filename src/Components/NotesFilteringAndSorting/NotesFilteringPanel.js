import React from "react"
import { Button } from "Components/Common"
import { LOADING_STATUS } from "Util/Constants"
import { connect } from 'react-redux'
import { updateCriteriaForFiltering } from "Actions"

class NotesFilteringPanel extends React.Component {

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value});
    }

    handleFilteringButtonClick = (event) => {
        
    }

    render() {
        return (
            <div>
                
            </div>
        );
    };
}

const mapDispatchToProps = {
    onFilter: updateCriteriaForFiltering,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(NotesFilteringPanel)
