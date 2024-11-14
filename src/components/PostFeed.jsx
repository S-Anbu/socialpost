import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';

const PostFeed = () => {
  const posts = useSelector((state) => state.posts.posts);
  
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
