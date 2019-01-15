import React from "react"

const Post = props => {
  const {post} = props
  return (
    <div>
      <img src={post.thumbnailUrl} />
      <h2>{post.username}</h2>
      <img src={post.imageUrl} />
      <h4>heart symbol</h4>
      <h4>comment symbol</h4>
      <h4>{post.likes} likes</h4>
    </div>
  );
}


export default Post;