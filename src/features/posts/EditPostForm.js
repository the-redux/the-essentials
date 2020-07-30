import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postUpdated } from './postsSlice';

export const EditPostForm = () => {
  const { postId } = useParams();

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  );

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();

  const onClicked = () => {
    if (title && content) {
      dispatch(
        postUpdated({
          id: postId,
          title,
          content,
        })
      );
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="button" onClick={onClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
}