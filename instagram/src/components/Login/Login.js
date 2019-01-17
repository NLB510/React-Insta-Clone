import React from "react";

const Login = props => {
  return <div className="login-container">
      <form className="form-container">
        <div className="form-item-container">
          <label>username:</label>
          <span>
            <input type="text" placeholder="Enter Username" value={props.usernameInput} name="usernameInput" onChange={props.handleChange} />
          </span>
        </div>
        <div className="form-item-container">
          <label>password:</label>
          <span>
            <input type="text" placeholder="Enter Password" value={props.passwordInput} name="passwordInput" onChange={props.handleChange} />
          </span>
        </div>
        <button onClick={props.toggleLoginStatus}>Login</button>
      </form>
    </div>;
};

export default Login;
