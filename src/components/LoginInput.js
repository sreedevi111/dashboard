import React from "react";

function LoginInput() {
  return (
    <div >
      <form >
      <h5> Username</h5>
        <input type="text" />
        <h5> E-mail</h5>
        <input type="text" />
        <h5> Password</h5>
        <input type="password" />
        <button className="login_signInButton">SignIn</button>
      </form>
    </div>
  );
}

export default LoginInput;
