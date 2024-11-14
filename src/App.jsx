
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import UserProfile from './components/UserProfile';
import PostDetails from './components/PostDetails';

function App() {
  return (
    <Router>
      <div className="flex justify-between px-4 py-2 max-w-lg mx-auto text-blue-500 bg-slate-100 text-xl font-bold ">
        <Link to="/" className='p-2'>Home</Link>
        <Link to="/create-post" className='p-2 bg-blue-500 rounded text-white'>Create Post</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
