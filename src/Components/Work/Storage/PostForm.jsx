import React, { useState } from 'react';
import Sidebar from '../../sidebar/Sidebar1';

const PostForm = ({ onSubmit }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    deadline: '',
    description: '',
    attachment: null
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setNewPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(newPost); 
    }
    setNewPost({ 
      title: '',
      deadline: '',
      description: '',
      attachment: null
    });
  };

  return (
    <div>
      <Sidebar />
      <div className='Submission-table'>
        <h1>게시물 작성</h1>
        <form onSubmit={handleSubmit}>
          <label>
            제목:
            <input type="text" name="title" value={newPost.title} onChange={handleChange} />
          </label>
          <br />
          <label>
            마감일:
            <input type="datetime-local" name="deadline" value={newPost.deadline} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">등록</button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
