import React from 'react';
import UserPost from './UserPost';
import EditPostForm from './EditPostForm';

const UserPostsList = ({
  posts,
  deletePost,
  editPost,
  editingPostId,
  updatePost,
  cancelEdit,
}) => {
  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => console.log('Fetched users:', data));
  };

  return (
    <div className="px-1">
      {posts.map((post) => (
        <div key={post.id} className="my-1 box flex-row">
          {editingPostId === post.id ? (
            <EditPostForm
              post={post}
              updatePost={updatePost}
              onEditComplete={() => {
                cancelEdit();
                fetchUsers(); // Trigger API call after editing a post
              }}
            />
          ) : (
            <UserPost post={post} />
          )}
          <button
            className="btn btn-danger"
            onClick={() => {
              deletePost(post.id);
              fetchUsers(); // Trigger API call when deleting a post
            }}
          >
            Delete
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              editPost(post.id);
              fetchUsers(); // Trigger API call when editing a post
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserPostsList;
