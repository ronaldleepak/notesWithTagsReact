import { handleActions } from 'redux-actions';
import {
    ADD_COMPONENT_ERROR_SUCCESS,
    CLEAR_COMPONENT_ERROR_SUCCESS,
} from '../Actions'

const initialState = {
    errors: {},
};

const componentError = handleActions({
    [ADD_COMPONENT_ERROR_SUCCESS]: (state, { payload }) => {
        var { errors } = state;
        const { componentName, error } = payload;
        const newErrors = {
            ...errors,
            [componentName]: error,
        };
        return {
            ...state,
            errors: newErrors,
        }
    },
    [CLEAR_COMPONENT_ERROR_SUCCESS]: (state, { payload }) => {
        const { errors } = state;
        const { componentName } = payload;
        const newErrors = { ...errors };
        delete newErrors[componentName];
        return {
            ...state,
            errors: (componentName) ? newErrors : {},
        }
    },
}, initialState);

export default componentError;
