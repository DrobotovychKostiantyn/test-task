import types from './actionTypes';

export const fetchPostsRequest = () => ({
  type: types.FETCH_REQUEST_POSTS,
});

export const fetchPostsSuccess = data => ({
  type: types.FETCH_SUCCESS_POSTS,
  payload: {
    data,
  },
});

export const fetchPostsError = error => ({
  type: types.FETCH_ERROR_POSTS,
  payload: {
    error,
  },
});

export const fetchPostRequest = () => ({
  type: types.FETCH_REQUEST_POST,
});

export const fetchPostSuccess = data => ({
  type: types.FETCH_SUCCESS_POST,
  payload: {
    data,
  },
});

export const fetchPostError = error => ({
  type: types.FETCH_ERROR_POST,
  payload: {
    error,
  },
});

export const fetchCommentRequest = () => ({
  type: types.FETCH_REQUEST_COMMENT,
});

export const fetchCommentSuccess = data => ({
  type: types.FETCH_SUCCESS_COMMENT,
  payload: {
    data,
  },
});

export const fetchCommentError = error => ({
  type: types.FETCH_ERROR_COMMENT,
  payload: {
    error,
  },
});

export const fetchDeletePostRequest = () => ({
  type: types.FETCH_REQUEST_DELETE_POST,
});

export const fetchDeletePostSuccess = id => ({
  type: types.FETCH_SUCCESS_DELETE_POST,
  payload: {
    id,
  },
});

export const fetchDeletePostError = error => ({
  type: types.FETCH_ERROR_DELETE_POST,
  payload: {
    error,
  },
});
