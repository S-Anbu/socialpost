// src/components/CreatePost.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postSlice';
import { useNavigate } from 'react-router-dom';
import { generateUniqueId } from '../utils/helpers';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMediaFile(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    const newPost = {
      id: generateUniqueId(),
      userId: 1,
      username: 'John Doe',
      avatar: 'https://via.placeholder.com/150',
      content,
      image: mediaFile,
      likes: 0,
      comments: [],
      timestamp: Date.now(),
    };
    dispatch(addPost(newPost));
    navigate('/');
  };

  return (
    <div className="p-4">
      <textarea
        className="w-full p-2 border rounded-md"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      ></textarea>
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="my-2"
      />
      {mediaFile && <img src={mediaFile} alt="preview" className="w-full mt-2 rounded" />}
      <button onClick={handleSubmit} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md">
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
