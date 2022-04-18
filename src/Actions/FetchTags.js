import { createAction } from "redux-actions";
import { API } from 'aws-amplify'
import {
    listTags as ListTags,
} from 'graphql/noteWithTagsQueries'
import { addComponentError } from ".";

const FETCH_TAGS_START = 'FETCH_TAGS_START';
const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';

const fetchStart = createAction(FETCH_TAGS_START);
const fetchSuccess = createAction(FETCH_TAGS_SUCCESS);

const fetchTags = () => async (dispatch, getState) => {
    dispatch(fetchStart());

    try {
        const tagList = (await API.graphql({
            query: ListTags,
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        })).data.listTags.items;

        dispatch(fetchSuccess(tagList));
    } catch (error) {
        const errorMessage = `Failed to get tag list: ${error.toString()}`;
        dispatch(addComponentError("fetchUserData", errorMessage))
    }
}

export {
    FETCH_TAGS_START,
    FETCH_TAGS_SUCCESS,
}
export default fetchTags;

