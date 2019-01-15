import React, { Component } from "react";
import postData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      searchInput: '',
    };
  }

  componentDidMount() {
    this.setState({
      postData: postData
    })
  }

  addLikes = (timestamp) => {
    console.log("click fired")
    // if post id matches update state of this post
    const updatedLikes = this.state.postData.map(post => {
      if(post.timestamp === timestamp) {
        post.likes = post.likes + 1
      }
      return post
    })

    this.setState({
      postData: updatedLikes
    })

  }

  handleChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })

    console.log(this.state.commentInput)

  }


  render() {
    console.log(this.state.postData)
    return (
      <div className="App">
        <SearchBar searchInput={this.state.searchInput} handleChange={this.handleChange} />
        <PostContainer  addLikes={this.addLikes} postData={this.state.postData} searchInput={this.state.searchInput} />
      </div>
    );
  }
}

export default App;
