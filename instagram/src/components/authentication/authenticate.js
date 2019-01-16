import React from "react";

const authenticate = App =>
  class extends React.Component {
    render() {
      console.log("logging from authenticate")
      return <App />;
    }
  };

export default authenticate;
