import React from "react";
import "./Login.css";
import Left from "./Left";
import Right from "./Right";
function Login({ setuser }) {
  return (
    <div className="login">
      <Left />
      <Right setuser={setuser} />
    </div>
  );
}

export default Login;
