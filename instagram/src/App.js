import React, { Component } from "react";
import PostPage from "./components/PostContainer/PostPage"
import authenticate from "./components/authentication/authenticate"
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };

    // console.log('App js constructor')
  }

  

  render() {
    // console.log('App js render')
    return (
      <div className="App">
        
        <PostPage />
      </div>
    );
  }
}

const InstaApp = authenticate(App);

export default App;
