import { createSlice } from '@reduxjs/toolkit';

// Load posts from localStorage
const loadPostsFromLocalStorage = () => {
  const savedPosts = localStorage.getItem('posts');
  return savedPosts ? JSON.parse(savedPosts) : [];
};

// Save posts to localStorage
const savePostsToLocalStorage = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: loadPostsFromLocalStorage(),
    users: [
      { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/150', bio: 'Software Engineer' },
      // Add other users if needed
    ],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
      savePostsToLocalStorage(state.posts); // Save updated posts to localStorage
    },
    likePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) post.likes += 1;
      savePostsToLocalStorage(state.posts); // Save updated posts to localStorage
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) post.comments.push(comment);
      savePostsToLocalStorage(state.posts); // Save updated posts to localStorage
    },
  },
});

export const { addPost, likePost, addComment } = postSlice.actions;
export default postSlice.reducer;
