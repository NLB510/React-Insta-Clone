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
    };
  }

  componentDidMount() {
    this.setState({
      postData: postData
    })
  }

  render() {
    
    return (
      <div className="App">
        <SearchBar />
        <PostContainer postData={this.state.postData} />
      </div>
    );
  }
}

export default App;
