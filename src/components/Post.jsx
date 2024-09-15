import React from 'react';

const Post = ({ signedIn, post }) => {
  return (
    <div className="post p-1">
      {post && (
        <>
          <h1 className="heading-sm py-1">{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default Post;
