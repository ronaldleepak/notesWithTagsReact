import { handleActions } from 'redux-actions';
import {
    UPDATE_ERROR_SUCCESS,
    CLEAR_ERROR_SUCCESS,
} from '../Actions'

const initialState = {
    errors: {},
};

const error = handleActions({
    [UPDATE_ERROR_SUCCESS]: (state, { payload }) => {
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
    [CLEAR_ERROR_SUCCESS]: (state, { payload }) => {
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

export default error;
