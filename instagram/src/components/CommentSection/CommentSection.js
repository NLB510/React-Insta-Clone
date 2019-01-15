import React from "react";
import Comment from "./Comment";
const CommentSection = props => {
  const postComments = props.comments.map((comment,index) => {
    return <Comment key={index} text={comment.text} username={comment.username} />;
  });

  return <div>{postComments}</div>;
};

export default CommentSection;
