import React, { Fragment } from "react";
import CommentSection from "../CommentSection/CommentSection";
import Post from "./Post";
import PropTypes from "prop-types";
import "./posts.css";

const PostContainer = props => {
  //mapping over the post data, sending the whole post to the Post component 
  // sending comments to the Comment Section component
  const post = props.postData.map(post => {
    return (
      <div key={post.timestamp} className="post-container">
        <Post post={post} />
        <CommentSection comments={post.comments} />
      </div>
    );
  });

  return <Fragment>{post}</Fragment>;
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
