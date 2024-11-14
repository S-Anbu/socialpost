import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CommentSection from './CommentSection';
import { formatDate } from '../utils/helpers';

const PostDetails = () => {
    const { postId } = useParams();
    const post = useSelector((state) =>
        state.posts.posts.find((p) => p.id === parseInt(postId))
    );

    return (
        <div className="p-4 mx-auto max-w-lg">
            {post && (
                <>
                    <h1 className='font-bold'>{post.username}</h1>
                    <p className="text-gray-500 text-sm">{formatDate(post.timestamp)}</p>
                    <h3>{post.content}</h3>
                    <img src={post.image} alt="post content" className="w-60 mt-2 rounded" />
                    <CommentSection postId={post.id} />
                </>
            )}
        </div>
    );
};

export default PostDetails;
