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

      if (username) {
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }


      // this.setState({
      //   loggedIn: loginStatus
      // });
      // console.log(localStorage.getItem("loginStatus"));
    }

    handleChange = e => {
      const { name, value } = e.target;

      this.setState({
        [name]: value
      });
    };

    toggleLogin = e => {
      // this.setState(prevState => ({
      //   loggedIn: !prevState.loggedIn
      // }));

      localStorage.setItem("username", `${this.state.usernameInput}`);
      localStorage.setItem("loginStatus", JSON.stringify(this.state.loggedIn));

      console.log("login fired");
    };

    render() {
      

      
      console.log(window.localStorage);
      console.log(localStorage.getItem("loginStatus"));
      // console.log(localStorage.getItem("username"));

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
