import React, { useState, useEffect } from 'react';
import LatestPost from './LatestPost';
import UserPostsIndex from './UserPostsIndex';

const Blog = ({ signedIn }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

  const fetchPosts = () => {
    const allPosts = require('../data/allPosts.json');
    const newPosts = require('../data/newPosts.json');
    const randomIndex = Math.round(Math.random() * 2);
    setPosts([...allPosts, newPosts[randomIndex]]);
    fetchUsers(); // Trigger API call when fetching posts
  };

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
    fetchUsers(); // Trigger API call when adding a post
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    fetchUsers(); // Trigger API call when deleting a post
  };

  const handleUpdatePost = (id, updatedPost) => {
    setPosts(
      posts.map(post =>
        post.id === id ? { ...post, ...updatedPost } : post
      )
    );
    fetchUsers(); // Trigger API call when updating a post
  };

  useEffect(() => {
    fetchPosts();
    fetchUsers(); // Initial load API call
    const intervalId = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1 className="m-1 p-1 text-center heading-lg">Memoization in React</h1>
      <div className="m-1 p-2">
        <div className="my-1 p-2 box">
          <div className="latest-posts-top">
            <h3 className="heading-md my-1 p-1">Latest posts</h3>
            <div className="p-1">{localTime}</div>
          </div>
          <div className="my-1">
            <button className="btn btn-primary" onClick={fetchPosts}>
              Get Latest Post
            </button>
          </div>
          <hr className="hr my-2" />
          <LatestPost signedIn={signedIn} post={posts[0]} />
        </div>
        <UserPostsIndex
          signedIn={signedIn}
          posts={posts}
          localTime={localTime}
          onAddPost={handleAddPost}
          onDeletePost={handleDeletePost}
          onUpdatePost={handleUpdatePost}
        />
        {signedIn && (
          <div className="my-1 p-2 box">
            <h2 className="heading-md">Fetched Users</h2>
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
