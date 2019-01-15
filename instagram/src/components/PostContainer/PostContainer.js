import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import Post from "./Post";
import PropTypes from "prop-types";

const PostContainer = props => {
  const post = props.postData.map(post => {
    return (
      <div key={post.timestamp}>
        <Post post={post} />
        <CommentSection comments={post.comments} />
      </div>
    );
  });

  return <div>{post}</div>;
};

PostContainer.propTypes = {
  postData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        }).isRequired
      )
    })
  )
};

export default PostContainer;
