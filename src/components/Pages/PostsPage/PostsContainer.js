import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../../modules/selectors';
import {
  fetchSuccessPosts,
  fetchSuccessDeletePost,
} from '../../../modules/operations';
import { postNewPost } from '../../services/api';
import PostsView from './PostsView';

const INITIAL_STATE = {
  title: '',
  body: '',
  loading: false,
  error: null,
};

class PostsPage extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.props.fetchSuccessPosts();
  }

  handleChangeArea = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleDeletePost = id => {
    this.props.fetchSuccessDeletePost(id);
  };

  handleSubmitForm = async e => {
    e.preventDefault();

    this.setState({ ...INITIAL_STATE });

    this.setState({
      loading: true,
    });

    const body = JSON.stringify({
      title: this.state.title,
      body: this.state.body,
    });

    await postNewPost(body)
      .then(() =>
        this.setState({
          loading: false,
        }),
      )
      .catch(error => this.setState({ error }));

    this.props.fetchSuccessPosts();
  };

  render() {
    const { posts } = this.props;
    const { title, body, loading, error } = this.state;
    return (
      <div>
        <PostsView
          posts={posts}
          {...this.props}
          handleChangeArea={this.handleChangeArea}
          submitForm={this.handleSubmitForm}
          handleDeletePost={this.handleDeletePost}
          title={title}
          body={body}
          loading={loading}
          error={error}
        />
      </div>
    );
  }
}

const mapState = state => ({
  posts: getPosts(state),
});

const mapDispatch = {
  fetchSuccessPosts,
  fetchSuccessDeletePost,
};

export default connect(
  mapState,
  mapDispatch,
)(PostsPage);
