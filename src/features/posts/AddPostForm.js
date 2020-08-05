import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();
  
  const users = useSelector(state => state.users);

  const onClicked = () => {
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId));
      setTitle('');
      setContent('');
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="postUser">Author:</label>
        <select
          type="text"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        >
          <option value="">Select User</option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="button" onClick={onClicked} disabled={!canSave}>
          Add
        </button>
      </form>
    </section>
  );
};
