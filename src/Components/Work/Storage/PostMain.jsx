import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostForm from '../Work/PostForm';
import PostList from '../Work/PostList';

const PostMain = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    setPosts(prevPosts => [...prevPosts, newPost]); 
  };

  return (
    <div>
      <Routes>
        <Route path="/PostForm" element={<PostForm onSubmit={handlePostSubmit} />} />
      </Routes>
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default PostMain;
