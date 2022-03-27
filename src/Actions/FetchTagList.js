import { createAction } from "redux-actions";
import { API } from 'aws-amplify'
import {
    listTags as ListTags,
} from '../graphql/noteWithTagsQueries'

const FETCH_TAG_LIST_START = 'FETCH_TAG_LIST_START';
const FETCH_TAG_LIST_SUCCESS = 'FETCH_TAG_LIST_SUCCESS';
const FETCH_TAG_LIST_FAILURE = 'FETCH_TAG_LIST_FAILURE';

const fetchStart = createAction(FETCH_TAG_LIST_START);
const fetchSuccess = createAction(FETCH_TAG_LIST_SUCCESS);
const fetchFailure = createAction(FETCH_TAG_LIST_FAILURE);

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
        console.log(error)
        dispatch(fetchFailure(errorMessage))
    }
}

export {
    FETCH_TAG_LIST_START,
    FETCH_TAG_LIST_SUCCESS,
    FETCH_TAG_LIST_FAILURE,
}
export default fetchTagList;

