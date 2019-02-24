import React from 'react';
import s from './PostView.module.css';

const PostView = ({
  post,
  submitForm,
  handleChangeArea,
  comment,
  loading,
  error,
}) => (
  <div className={s.wrapper}>
    <p>
      <span className={s.selectText}>Title:</span> {post.title}
    </p>
    <p>
      <span className={s.selectText}>Body:</span> {post.body}
    </p>

    {post.comments && (
      <>
        <h2>Comments:</h2>
        <ul className={s.list}>
          {post.comments.map(item => (
            <li key={item.id} className={s.listItem}>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </>
    )}
    <form onSubmit={submitForm} className={s.form}>
      <textarea
        onChange={handleChangeArea}
        placeholder="Enter comment"
        name="comment"
        value={comment}
        className={s.text}
        required
      />

      <button type="submit" className={s.btn}>
        Send comment
      </button>
      {loading && <h2>loading....</h2>}
      {error && <h2>Try again!</h2>}
    </form>
  </div>
);

export default PostView;
