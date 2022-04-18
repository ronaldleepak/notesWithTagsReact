
import { createAction } from "redux-actions";

const ADD_COMPONENT_ERROR_SUCCESS = 'ADD_COMPONENT_ERROR_SUCCESS';
const CLEAR_COMPONENT_ERROR_SUCCESS = 'CLEAR_COMPONENT_ERROR_SUCCESS';

const addComponentErrorSuccess = createAction(ADD_COMPONENT_ERROR_SUCCESS);
const clearComponentErrorSuccess = createAction(CLEAR_COMPONENT_ERROR_SUCCESS);

const addComponentError = (componentName, error) => async (dispatch, getState) => {
    try {
        const errorObj = {
            componentName,
            error,
        }

        dispatch(addComponentErrorSuccess(errorObj))
    } catch (error) {
        const errorMessage = `Failed to update error: ${error.toString()}`;
        console.log(errorMessage)
    }
}

const clearComponentError = (componentName) => async (dispatch, getState) => {
    try {
        if (componentName) {
            const errorObj = {
                componentName,
            }
            dispatch(clearComponentErrorSuccess(errorObj))
        } else {
            dispatch(clearComponentErrorSuccess())
        }
        
    } catch (error) {
        const errorMessage = `Failed to clear error: ${error.toString()}`;
        console.log(errorMessage)
    }
}

export {
    ADD_COMPONENT_ERROR_SUCCESS,
    CLEAR_COMPONENT_ERROR_SUCCESS,
}
export {
    addComponentError,
    clearComponentError,
};

