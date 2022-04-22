import React from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButton from "./LinkButton";
import { clearComponentError } from "Actions";

class ErrorMessageBox extends React.Component {
    static propTypes = {
        refName: PropTypes.string,
    }
    
    handleCloseButtonClick = () => {
        const { onClearError, refName } = this.props;
        onClearError(refName)
    }

    render() {
        const { errors, refName } = this.props;
        return (
            (errors[refName]) ? 
            (<div className="field has-addons has-background-danger-light py-2">
                <div className="control is-expanded has-text-danger ml-2">
                    {errors[refName]}
                </div>
                <div className="control">
                    <LinkButton
                        className="mr-2"
                        action={this.handleCloseButtonClick}
                        label={(
                            <FontAwesomeIcon className="has-text-danger" icon="xmark"/>
                        )}/>
                </div>
            </div>) : null
        );
    };
}

const mapDispatchToProps = {
    onClearError: clearComponentError,
};

const mapStateToProps = (state) => {
    return {
        errors: state.componentError.errors,
    }
}

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(ErrorMessageBox)

