import React, { useState } from 'react';

const EditPostForm = ({ post, updatePost, onEditComplete }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(post.id, { title, body });
    fetchUsers(); // Trigger API call when saving the post
    onEditComplete();  // Notify that editing is complete
  };

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => console.log('Fetched users:', data));
  };

  return (
    <form onSubmit={handleSubmit} className="edit-post-form">
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
        Save
      </button>
    </form>
  );
};

export default EditPostForm;
