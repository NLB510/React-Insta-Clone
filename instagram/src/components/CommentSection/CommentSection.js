import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import "./comment.css";

const CommentSection = props => {
  // console.log(props);
  const postComments = props.comments.map((comment, index) => {
    return (
      <div>
        <Comment key={index} text={comment.text} username={comment.username} />
      </div>
    );
  });

  return (
    <div>
      <div className="comment-container">{postComments}</div>
      <div className="comment-input-container">
        <input
          type="text"
          placeholder="Add a comment..."
          className="comment-input"
        />
        <span className="ellipsis">
          <i class="fas fa-ellipsis-v" />
        </span>
      </div>
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    })
  )
};

export default CommentSection;
