import React, { Component } from "react";
import PostPage from "./components/PostContainer/PostPage";
import authenticate from "./components/authentication/authenticate";
import Login from "./components/Login/Login";


import "./App.css";

class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    
    return (
      <div className="App">
        <ConditionalView />
      </div>
    );
  }
}

const ConditionalView = authenticate(PostPage)(Login);

export default App;
