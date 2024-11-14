import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../redux/postSlice';
import Avatar from './Avatar';
import { formatDate } from '../utils/helpers';

const CommentSection = ({ postId }) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.id === postId)
  );

  const handleComment = () => {
    const newComment = {
      id: Date.now(),
      userId: 1,
      username: 'Current User',
      content: comment,
      timestamp: Date.now(),
    };
    dispatch(addComment({ postId, comment: newComment }));
    setComment('');
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold">Comments</h3>
      <input
        className="w-full p-2 border rounded-md"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleComment} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md">Comment</button>
      {post.comments.map((c) => (
        <div key={c.id} className="my-2 flex items-start">
          <Avatar src={c.avatar} size="w-8 h-8" />
          <div className="ml-2">
            <h4 className="font-semibold">{c.username}</h4>
            <p className="text-gray-700">{c.content}</p>
            <span className="text-gray-400 text-xs">{formatDate(c.timestamp)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
