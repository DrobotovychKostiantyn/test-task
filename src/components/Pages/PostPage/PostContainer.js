import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectPost } from '../../../modules/selectors';
import { fetchSuccessPostById } from '../../../modules/operations';
import { postNewComment } from '../../services/api';
import PostView from './PostView';

const INITIAL_STATE = {
  comment: '',
  loading: false,
  error: null,
};

class PostPage extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.props.fetchSuccessPostById(this.props.match.params.id);
  }

  handleChangeArea = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmitForm = async e => {
    e.preventDefault();

    this.setState({ ...INITIAL_STATE });

    this.setState({
      loading: true,
    });

    await postNewComment(
      JSON.stringify({
        postId: this.props.post.id,
        body: this.state.comment,
      }),
    )
      .then(() =>
        this.setState({
          loading: false,
        }),
      )
      .catch(error => this.setState({ error }));

    this.props.fetchSuccessPostById(this.props.match.params.id);
  };

  render() {
    const { post } = this.props;
    const { comment, loading, error } = this.state;

    return (
      <PostView
        post={post}
        handleChangeArea={this.handleChangeArea}
        submitForm={this.handleSubmitForm}
        comment={comment}
        loading={loading}
        error={error}
      />
    );
  }
}

const mapState = state => ({
  post: getSelectPost(state),
});

const mapDispatch = { fetchSuccessPostById };

export default connect(
  mapState,
  mapDispatch,
)(PostPage);
