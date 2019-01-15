import React from "react";
import PropTypes from "prop-types";

const Post = props => {
  const { post } = props;
  // console.log(post);
  return <div>
      <div className="post-header">
        <img src={post.thumbnailUrl} alt={`${post.username}'s thumbnail`} className="thumbnail-image" />
        <h3>{post.username}</h3>
      </div>
      <img src={post.imageUrl} alt={`${post.username}`} className="post-image" />
      <div className="post-middle-container">
        <div className="symbols">
        <span onClick={() => props.addLikes(post.timestamp)} className="symbol-item like"><i className="far fa-heart" /></span>
        <span><i className="far fa-comment"></i></span>
        </div>
        <h4>{post.likes} likes</h4>
      </div>
    </div>;
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
