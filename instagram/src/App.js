import React, { Component } from "react";
<<<<<<< HEAD
import PostPage from "./components/PostContainer/PostPage";
import authenticate from "./components/authentication/authenticate";
import Login from "./components/Login/Login";
=======
import postData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

>>>>>>> dbfd5b5a0f70b6c2deaeea0e732760bf1153227f
import "./App.css";

class App extends Component {
  constructor() {
    super();
<<<<<<< HEAD
    this.state = {};
=======
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
>>>>>>> dbfd5b5a0f70b6c2deaeea0e732760bf1153227f

  }

<<<<<<< HEAD
=======

>>>>>>> dbfd5b5a0f70b6c2deaeea0e732760bf1153227f
  render() {
    console.log(this.state.postData)
    return (
      <div className="App">
<<<<<<< HEAD
        <PostPage />
=======
        <SearchBar searchInput={this.state.searchInput} handleChange={this.handleChange} />
        <PostContainer  addLikes={this.addLikes} postData={this.state.postData} searchInput={this.state.searchInput} />
>>>>>>> dbfd5b5a0f70b6c2deaeea0e732760bf1153227f
      </div>
    );
  }
}

<<<<<<< HEAD
// const Authenticate = authenticate;

export default authenticate(App)(Login);
=======
export default App;
>>>>>>> dbfd5b5a0f70b6c2deaeea0e732760bf1153227f
