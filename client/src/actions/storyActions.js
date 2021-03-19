import axios from "axios";
import {
    STORY_LIST_REQUEST,
    STORY_LIST_SUCCESS,
    STORY_LIST_FAIL,
    STORY_DETAIL_REQUEST,
    STORY_DETAIL_SUCCESS,
    STORY_DETAIL_FAIL
} from "../constants/storyConstants";

export const listAllStories = () => {
    return async (dispatch) => {
        try {
            dispatch({type: STORY_LIST_REQUEST});
            const {data} = await axios.get("/api/v1/stories");
            dispatch({type: STORY_LIST_SUCCESS, payload: data});
        } catch(err) {
            dispatch({
                type: STORY_LIST_FAIL,
                payload: err.response && err.response.data.message ? err.response.data.message : err.message
            })
        }
    };
};

export const getSingleStory = (id) => {
    return async (dispatch) => {
        try {
            dispatch({type: STORY_DETAIL_REQUEST});
            console.log(id);
            if (id === undefined) {
                console.log("undefined");
            }
            const { data } = await axios.get(`/api/v1/stories/${id}`);
            dispatch({type: STORY_DETAIL_SUCCESS, payload: data});
        } catch(err) {
            dispatch({
                type: STORY_DETAIL_FAIL,
                payload: err.response && err.response.data.message ? err.response.data.message : err.message
            });
        }
    }
}