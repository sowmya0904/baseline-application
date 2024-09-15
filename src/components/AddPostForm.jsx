import React, { useState } from 'react';

const AddPostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      addPost({ id: Math.random(), title, body });
      fetchUsers(); // Trigger API call when adding a post
      setTitle('');
      setBody('');
    }
  };

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => console.log('Fetched users:', data));
  };

  return (
    <form onSubmit={handleSubmit} className="add-post-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="form-control my-1"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        className="form-control my-1"
      />
      <button type="submit" className="btn btn-primary">
        Add Post
      </button>
    </form>
  );
};

export default AddPostForm;
