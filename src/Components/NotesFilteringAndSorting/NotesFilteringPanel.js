import React from "react"
import { Button } from "Components/Common"
import { LOADING_STATUS } from "Util/Constants"
import { connect } from 'react-redux'
import { updateCriteriaForFiltering } from "Actions"

class NotesFilteringPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            textForFiltering: "",
        };
    }

    handleInputChange = (field) => (event) => {
        this.setState({[field]: event.target.value});
    }

    handleFilteringButtonClick = () => {
        const { onFilter } = this.props;
        const { textForFiltering } = this.state;

        onFilter(textForFiltering);
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
