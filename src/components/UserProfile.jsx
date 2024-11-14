// src/components/UserProfile.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from './Post';
import Avatar from './Avatar';

const UserProfile = () => {
  const { userId } = useParams();
  const user = useSelector((state) => state.posts.users.find((u) => u.id === parseInt(userId)));
  const posts = useSelector((state) => state.posts.posts.filter((p) => p.userId === parseInt(userId)));

  if (!user) return <div>User not found.</div>;

  return (
    <div className="p-4">
      <div className="flex items-center">
        <Avatar src={user.avatar} alt={`${user.name}'s avatar`} size="w-16 h-16" />
        <div className="ml-4">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.bio}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Posts by {user.name}</h3>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
