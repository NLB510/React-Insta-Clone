import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/*
=== LOGIN STYLES ====
*/

const LoginContainer = styled.div`
  width: 100%;
  ${"" /* height: 200px; */}
  margin: 5% auto;
  -webkit-box-shadow: 5px 5px 15px -4px rgba(0, 0, 0, 0.61);
  box-shadow: 5px 5px 15px -4px rgba(0, 0, 0, 0.61);
  border-radius: 5px;
  background: lightgrey;
`;

const FormContainer = styled.form`
  width: 50%;
  margin: 0 auto;
  padding: 15%;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 5%;
`


const LoginButton = styled.button`
  width: 40%;
  padding: 3%;
  margin-top: 3%;

  font-size: 1.2rem;

`







/*
=== LOGIN COMPONENT ====
*/

const Login = props => {
  return <LoginContainer className="login-container">
      <FormContainer className="form-container">
        <div className="form-item-container">
          <span>
            <FormInput type="text" placeholder="Enter Username" value={props.usernameInput} name="usernameInput" onChange={props.handleChange} />
          </span>
        </div>
        <div className="form-item-container">
          <span>
          <FormInput type="text" placeholder="Enter Password" value={props.passwordInput} name="passwordInput" onChange={props.handleChange} />
          </span>
        </div>
        <LoginButton onClick={props.toggleLoginStatus}>Login</LoginButton>
      </FormContainer>
    </LoginContainer>;
};


Login.propTypes = {
  usernameInput: PropTypes.string,
  passwordInput: PropTypes.string,
  handleChange: PropTypes.func,
  toggleLoginStatus: PropTypes.func
};




export default Login;
