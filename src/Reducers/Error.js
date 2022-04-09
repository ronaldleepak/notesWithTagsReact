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
        errors[componentName] = error;
        return {
            ...state,
            errors,
        }
    },
    [CLEAR_ERROR_SUCCESS]: (state, { payload }) => {
        var { errors } = state;
        const { componentName } = payload;
        delete errors[componentName];
        return {
            ...state,
            errors: (componentName) ? errors : {},
        }
    },
}, initialState);

export default error;
