import React from "react";

const authenticate = App => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedIn: false,
        usernameInput: "",
        passwordInput: ""
      };
    }

    componentDidMount() {
  
      
      const username = localStorage.getItem("username");

      // checks if a username is saved to localStorage, change login status on state if true
      if (username) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }

    }

    handleChange = e => {
      const { name, value } = e.target;

      this.setState({
        [name]: value
      });
    };

    // saves the username and login status to local storage when the login button is clicked
    toggleLogin = e => {

      localStorage.setItem("username", `${this.state.usernameInput}`);
      localStorage.setItem("loginStatus", JSON.stringify(this.state.loggedIn));

      
    };

    render() {
      

      // Checks login status and loads app if logged in or the login page if now
      return this.state.loggedIn ? (
        <App />
      ) : (
        <LoginPage
          toggleLoginStatus={this.toggleLogin}
          handleChange={this.handleChange}
        />
      );
    }
  };

export default authenticate;
