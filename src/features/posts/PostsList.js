import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';

export const PostsList = () => {
  const posts = useSelector(state => state.posts);

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <p>{post.content}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
