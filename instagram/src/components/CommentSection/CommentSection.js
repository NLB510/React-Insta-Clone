import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import "./comment.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      addedComments: [],
      commentInput: ""
    };
  }


  




  addNewComment = e => {
    e.preventDefault();
    // console.log(e)

    const newComments = {
      addedComments: [
        ...this.state.addedComments,
        {
          username: "default",
          text: this.state.commentInput
        }
      ],
      commentInput: ""
    };
    this.setState(newComments);

    // const newComments = {
    //   comments: [
    //     ...this.state.comments,
    //     { username: "default", text: this.state.commentInput }
    //   ],
    //   commentInput: ""
    // };
    // this.setState(newComments);



  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });

    // console.log(this.state.commentInput);
  };

  render() {
    // console.log("Comment section render");

    const postComments = this.state.comments.map((comment, index) => {
      return (
        <div>
          <Comment
            key={index}
            text={comment.text}
            username={comment.username}
          />
        </div>
      );
    });

    const newComments = this.state.addedComments.map((comment,index) => {
      return (
        <div>
          <Comment
            key={index}
            text={comment.text}
            username={comment.username}
          />
        </div>
      );
    })

    // console.log(localStorage.getItem('comment'))
    return (
      <div>
        <div className="comment-container">{postComments}{newComments}</div>
        <div className="comment-input-container">
          <form onSubmit={this.addNewComment}>
            <input
              type="text"
              placeholder="Add a comment..."
              className="comment-input"
              name="commentInput"
              value={this.state.commentInput}
              onChange={this.handleChange}
            />
          </form>
          <span className="ellipsis">
            <i className="fas fa-ellipsis-v" />
          </span>
        </div>
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
