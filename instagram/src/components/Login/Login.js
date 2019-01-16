import React from "react";

const Login = props => {
  return (
    <div className="login-container">
      <form className="form-container">
        <div className="form-item-container">
          <label>username:</label>
          <span>
            <input type="text" placeholder="Enter Username" />
          </span>
        </div>
        <div className="form-item-container">
          <label>password:</label>
          <span>
            <input type="text" placeholder="Enter Password" />
          </span>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
