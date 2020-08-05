import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';
import { ReactionButtons } from './ReactionButtons';

export const PostsList = () => {
  const posts = useSelector(state => state.posts);

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p>{post.content}</p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="btn">View Post</Link>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
