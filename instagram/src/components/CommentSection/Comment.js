import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Comment = props => {
  console.log(props)
  const { username, text, index} = props;
  console.log(index)
  return (
    <Fragment>
      <p>
        <strong>{username}</strong> {text}
      </p>
    </Fragment>
  );
};

Comment.propTypes = {
  text: PropTypes.string,
  username: PropTypes.string
};

export default Comment;
