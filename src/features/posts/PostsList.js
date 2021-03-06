import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PostExcerpt } from './PostExcerpt';
import { selectAllPosts, fetchPosts } from './postsSlice';

export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);
  
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === 'loading') {
    content = <div className="loader">Loading...</div>
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPosts.map(post => (
      <PostExcerpt key={post.id} post={post} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  // const renderedPosts = orderedPosts.map(post => (
  //   <article className="post-excerpt" key={post.id}>
  //     <h3>{post.title}</h3>
  //     <div>
  //       <PostAuthor userId={post.user} />
  //       <TimeAgo timestamp={post.date} />
  //     </div>
  //     <p>{post.content}</p>
  //     <ReactionButtons post={post} />
  //     <Link to={`/posts/${post.id}`} className="btn">View Post</Link>
  //   </article>
  // ));

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};
