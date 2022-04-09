import { createAction } from "redux-actions";
import { API } from 'aws-amplify'
import {
    listTags as ListTags,
} from '../graphql/noteWithTagsQueries'
import { updateError } from ".";

const FETCH_TAG_LIST_START = 'FETCH_TAG_LIST_START';
const FETCH_TAG_LIST_SUCCESS = 'FETCH_TAG_LIST_SUCCESS';

const fetchStart = createAction(FETCH_TAG_LIST_START);
const fetchSuccess = createAction(FETCH_TAG_LIST_SUCCESS);

const fetchTagList = () => async (dispatch, getState) => {
    dispatch(fetchStart());

    try {
        const tagList = (await API.graphql({
            query: ListTags,
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        })).data.listTags.items;

        dispatch(fetchSuccess(tagList));
    } catch (error) {
        const errorMessage = `Failed to get tag list: ${error.toString()}`;
        dispatch(updateError("fetchUserData", errorMessage))
    }
}

export {
    FETCH_TAG_LIST_START,
    FETCH_TAG_LIST_SUCCESS,
}
export default fetchTagList;

