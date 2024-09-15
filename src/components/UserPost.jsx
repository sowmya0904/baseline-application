import React from 'react';

const UserPost = ({ post }) => {
  if (!post) {
    return null;
  }

  return (
    <div className="my-1 flex-row-left">
      <h4 id={post.title} className="px-2 font-sm font-bold">
        {post.title}
      </h4>
      <p>{post.body}</p>
    </div>
  );
};

export default UserPost;
