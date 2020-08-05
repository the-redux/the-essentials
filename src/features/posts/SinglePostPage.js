import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PostAuthor } from './PostAuthor';

export const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  );

  if (!post) {
    return (<section>Not Found</section>);
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title} <small><PostAuthor userId={post.user} /></small></h2>

        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="btn">
          Edit Post
        </Link>
      </article>
    </section>
  );
};
