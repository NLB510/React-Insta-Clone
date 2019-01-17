import React, { Component, Fragment } from "react";
import postData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      searchInput: ""
    };

    // console.log('App js constructor')
  }

  componentDidMount() {
    this.setState({
      postData: postData
    })

    // console.log("app JS CDM")

    if (localStorage.getItem("postData") === null) {
      localStorage.setItem("postData", "[]");
      return;
    }
    const appStorage = JSON.parse(localStorage.getItem("postData"));

    if (appStorage !== "") {
      return this.setState({ postData: appStorage })
    }





  }

  componentDidUpdate() {
    let appStorage = localStorage.getItem("postData");
    const dataString = JSON.stringify(this.state.postData);

    return appStorage !== dataString
      ? localStorage.setItem("postData", JSON.stringify(this.state.postData))
      : null;
  }

  addLikes = timestamp => {
    // console.log("click fired");

    // if post id matches update state of this post
    const updatedLikes = this.state.postData.map(post => {
      if (post.timestamp === timestamp) {
        post.likes = post.likes + 1;
      }
      return post;
    });

    this.setState({
      postData: updatedLikes
    });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });

    // console.log(this.state.commentInput);
  };

  // Resets the username and login status on local storage when the logout is clicked
  // reloads page and user is sent back to login page
  handleLogout = e => {
    localStorage.setItem("username", '');
    localStorage.setItem("loginStatus", 'false');

    window.location.reload();
  }

  render() {
    
    return (
      <Fragment>
        <SearchBar
          searchInput={this.state.searchInput}
          handleChange={this.handleChange}
          logout={this.handleLogout}
        />
        <PostContainer
          addLikes={this.addLikes}
          postData={this.state.postData}
          searchInput={this.state.searchInput}
        />
      </Fragment>
    );
  }
}

export default PostPage;
