import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  );

  if (!post) {
    return <section>Not Found</section>;
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  );
};
