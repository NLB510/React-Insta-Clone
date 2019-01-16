import React from "react";

const authenticate = App => LoginPage =>
  class extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        loggedIn: true
      }

    }

    toggleLogin = e => {
      this.setState(prevState => ({
        loggedIn: !prevState.loggedIn
      }))
    }

    render() {
      // console.log("logging from authenticate")
      return this.state.loggedIn ? <App /> : <LoginPage />;
    }
  };

export default authenticate;
