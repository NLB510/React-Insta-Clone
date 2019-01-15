import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

const CommentSection = props => {
  // console.log(props);
  const postComments = props.comments.map((comment, index) => {
    return (
      <Comment key={index} text={comment.text} username={comment.username} />
    );
  });

  return (
    <div>
      {postComments} 
      <input type="text" placeholder="Add a comment..." />
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
