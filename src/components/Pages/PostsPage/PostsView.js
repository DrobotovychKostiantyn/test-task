import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './PostsView.module.css';

const PostsView = ({
  posts,
  match,
  submitForm,
  handleChangeArea,
  handleDeletePost,
  title,
  body,
  loading,
  error,
}) => (
  <div className={s.wrapper}>
    <ul className={s.list}>
      {posts.map(post => (
        <li key={post.id} className={s.listItem}>
          <NavLink to={`${match.url}/${post.id}`} className={s.link}>
            <p>
              <span className={s.selectText}>Title:</span> {post.title}
            </p>
            <p>
              <span className={s.selectText}>Body:</span> {post.body}
            </p>
          </NavLink>
          <button
            type="button"
            onClick={() => handleDeletePost(post.id)}
            className={s.btnDelete}
          >
            Delete a post
          </button>
        </li>
      ))}
    </ul>

    <form onSubmit={submitForm} className={s.form}>
      <div className={s.textBlock}>
        <textarea
          onChange={handleChangeArea}
          placeholder="Enter title"
          name="title"
          value={title}
          className={s.text}
          required
        />
        <textarea
          onChange={handleChangeArea}
          placeholder="Enter post"
          name="body"
          value={body}
          className={s.text}
          required
        />
      </div>

      {loading && <h2>loading....</h2>}
      {error && <h2>Try again!</h2>}

      <button type="submit" className={s.btn}>
        Send new post
      </button>
    </form>
  </div>
);

export default PostsView;
