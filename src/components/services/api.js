import axios from 'axios';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const postNewComment = async data => {
  const response = await axios.post(`/comments`, data, config);
  return response;
};

export const postNewPost = async data => {
  const response = await axios.post(`/posts`, data, config);
  return response;
};
