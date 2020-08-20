import React from 'react';
import { Link } from 'react-router-dom';

import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';
import { ReactionButtons } from './ReactionButtons';

export const PostExcerpt= ({ post }) => {
  return (
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
  )
}
