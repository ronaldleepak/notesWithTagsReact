import React from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButton from "./LinkButton";
import { clearComponentError } from "Actions";

class MessageBox extends React.Component {
    static propTypes = {
        component: PropTypes.string,
    }
    
    handleMessageBoxClose = () => {
        const { onClearError, component } = this.props;
        onClearError(component)
    }

    render() {
        const { errors, component } = this.props;
        return (
            (errors[component]) ? 
            (<div className="field has-addons has-background-danger-light py-2">
                <div className="control is-expanded has-text-danger ml-2">
                    {errors[component]}
                </div>
                <div className="control">
                    <LinkButton
                        className="mr-2"
                        action={this.handleMessageBoxClose}
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

export default enhancer(MessageBox)

