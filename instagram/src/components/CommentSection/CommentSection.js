import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

import styled from "styled-components";

/*
=== COMMENT SECTION STYLES
*/

const CommentContainer = styled.div`
  padding: 1% 0 0 2%;
`;

const InputContainer = styled.div`
  border-top: 1px solid lightgrey;
  width: 100%;
  
  margin: 0 auto;
`;

const CommentInput = styled.input`
  width: 96%;
  border: none;
  height: 50px;
  padding: 1% 2%;

  font-size: 1rem;
`;

/*
=== COMMENT SECTION COMPONENT
*/

class CommentSection extends React.Component {
  // mapping over comments of the post array
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      commentInput: ""
    };
  }

  addNewComment = e => {
    e.preventDefault();
    console.log(e);
    const newComments = {
      comments: [
        ...this.state.comments,
        {
          username: localStorage.getItem("username"),
          text: this.state.commentInput
        }
      ],
      commentInput: ""
    };
    this.setState(newComments);
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });

    console.log(this.state.commentInput);
  };

  render() {
    const postComments = this.state.comments.map((comment, index) => {
      return (
        <div key={index}>
          <Comment
            index={index}
            text={comment.text}
            username={comment.username}
          />
        </div>
      );
    });

    return (
      <div>
        <CommentContainer>{postComments}</CommentContainer>
        <InputContainer>
          <form onSubmit={this.addNewComment}>
            <CommentInput
              type="text"
              placeholder="Add a comment..."
              name="commentInput"
              value={this.state.commentInput}
              onChange={this.handleChange}
            />
          </form>
        </InputContainer>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    })
  )
};

export default CommentSection;
