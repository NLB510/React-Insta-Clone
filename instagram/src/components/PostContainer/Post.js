import React from "react";
import PropTypes from "prop-types";

const Post = props => {
  const { post } = props;
  // console.log(post);
  return (
    <div>
      <img src={post.thumbnailUrl} alt="" />
      <h2>{post.username}</h2>
      <img src={post.imageUrl} alt="" />
      <h4>heart symbol</h4>
      <h4>comment symbol</h4>
      <h4>{post.likes} likes</h4>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string
  })
};

export default Post;
