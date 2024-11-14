import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { likePost } from '../redux/postSlice';
import Avatar from './Avatar';
import { formatDate } from '../utils/helpers';

const Post = ({ post }) => {
    const dispatch = useDispatch();

    return (
        <div className="p-4 bg-white shadow-md mb-4 rounded-md mx-auto max-w-lg">
            <div className="flex items-center">
                <Link to={`/user/${post.userId}`}>
                    <Avatar src={post.avatar} />
                </Link>
                <div className="ml-2">
                    <h3 className="font-bold">{post.username}</h3>
                    <p className="text-gray-500 text-sm">{formatDate(post.timestamp)}</p>
                </div>
            </div>
            <p className="my-2">{post.content}</p>
            {post.image && <img src={post.image} alt="post content" className="w-80 mt-2 rounded " />}
            <div className="flex justify-between mt-2 text-black font-bold">
                <button onClick={() => dispatch(likePost(post.id))} className="text-blue-500">Like ({post.likes})</button>
                <Link to={`/post/${post.id}`} className="text-blue-500">Comments ({post.comments.length})</Link>
                <Link to={`/post/${post.id}`} className="text-blue-500">View post </Link>
            </div>
        </div>
    );
};

export default Post;
