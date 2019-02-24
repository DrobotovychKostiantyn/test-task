import axios from 'axios';
import * as actions from './actions';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const fetchSuccessPosts = () => async dispatch => {
  dispatch(actions.fetchPostsRequest);

  try {
    const response = await axios.get('/posts');
    dispatch(actions.fetchPostsSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchPostsError(error));
  }
};

export const fetchSuccessPostById = id => async dispatch => {
  dispatch(actions.fetchPostRequest);

  try {
    const response = await axios.get(`/posts/${id}?_embed=comments`);
    dispatch(actions.fetchPostSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchPostError(error));
  }
};

export const fetchSuccessDeletePost = id => async dispatch => {
  dispatch(actions.fetchDeletePostRequest());

  try {
    await axios.delete(`/posts/${id}`);
    dispatch(actions.fetchDeletePostSuccess(id));
  } catch (error) {
    dispatch(actions.fetchDeletePostError(error));
  }
};
