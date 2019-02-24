import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import postReducer from './postReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  posts: postsReducer,
  selectPost: postReducer,
  loading: loadingReducer,
  error: errorReducer,
});
