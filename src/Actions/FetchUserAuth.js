import { createAction } from "redux-actions";
import { Auth } from 'aws-amplify'
import { addComponentError } from ".";

const FETCH_CURRENT_USER_START = 'FETCH_CURRENT_USER_START';
const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';

const fetchCurrentUserStart = createAction(FETCH_CURRENT_USER_START);
const fetchCurrentUserSuccess = createAction(FETCH_CURRENT_USER_SUCCESS);

const fetchCurrentUserInfo = () => async (dispatch, getState) => {
    dispatch(fetchCurrentUserStart())

    try {
        const user = await Auth.currentUserInfo();
        dispatch(fetchCurrentUserSuccess(user))
    } catch (error) {
        const errorMessage = `Failed to fetch current user information: ${error.message.toString()}`;

        dispatch(addComponentError("fetchCurrentUser", errorMessage));
    }
}

export {
    FETCH_CURRENT_USER_START,
    FETCH_CURRENT_USER_SUCCESS,
}
export default fetchCurrentUserInfo;

