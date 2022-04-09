
import { createAction } from "redux-actions";

const UPDATE_ERROR_SUCCESS = 'UPDATE_ERROR_SUCCESS';
const CLEAR_ERROR_SUCCESS = 'CLEAR_ERROR_SUCCESS';

const updateErrorSuccess = createAction(UPDATE_ERROR_SUCCESS);
const clearErrorSuccess = createAction(CLEAR_ERROR_SUCCESS);

const updateError = (componentName, error) => async (dispatch, getState) => {
    try {
        const errorObj = {
            componentName,
            error,
        }

        dispatch(updateErrorSuccess(errorObj))
    } catch (error) {
        const errorMessage = `Failed to update error: ${error.toString()}`;
        console.log(errorMessage)
    }
}

const clearError = (componentName) => async (dispatch, getState) => {
    try {
        if (componentName) {
            const errorObj = {
                componentName,
            }
            dispatch(clearErrorSuccess(errorObj))
        } else {
            dispatch(clearErrorSuccess())
        }
        
    } catch (error) {
        const errorMessage = `Failed to clear error: ${error.toString()}`;
        console.log(errorMessage)
    }
}

export {
    UPDATE_ERROR_SUCCESS,
    CLEAR_ERROR_SUCCESS,
}
export {
    updateError,
    clearError,
};

