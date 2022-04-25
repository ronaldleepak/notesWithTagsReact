import React from "react"
import {
    Button,
    TextField,
} from "Components/Common"
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
        const { textForFiltering } = this.state;
        return (
            <div>
                <TextField
                    value={textForFiltering}
                    placeholder="Search by Title"
                    name="textForFiltering-input"
                    onChange={this.handleInputChange("textForFiltering")}
                />
                <Button
                    label="Search"
                    name="search"
                    action={this.handleFilteringButtonClick}/>
            </div>
        );
    };
}

const mapDispatchToProps = {
    onFilter: updateCriteriaForFiltering,
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(NotesFilteringPanel)
