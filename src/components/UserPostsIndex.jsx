import React from 'react';
import UserPostsList from './UserPostsList';
import AddPostForm from './AddPostForm';

const UserPostsIndex = ({
  signedIn,
  posts,
  localTime,
  onAddPost,
  onDeletePost,
  onUpdatePost,
}) => {
  const [editingPostId, setEditingPostId] = React.useState(null);

  const handleEditPost = (id) => {
    setEditingPostId(id);
    fetchUsers(); // Trigger API call when editing a post
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
  };

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => console.log('Fetched users:', data));
  };

  return (
    <div className="my-1 p-2 box">
      <div className="m-1 py-1">
        <h2 className="heading-md">Your Posts (Updated at {localTime})</h2>
        <p className="m-1 p-1">{signedIn ? 'Signed in' : 'Signed out'}</p>
        <AddPostForm addPost={onAddPost} />
        {posts && (
          <div className="px-1">
            <UserPostsList
              posts={posts}
              deletePost={onDeletePost}
              editPost={handleEditPost}
              cancelEdit={handleCancelEdit}
              editingPostId={editingPostId}
              updatePost={onUpdatePost}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPostsIndex;
