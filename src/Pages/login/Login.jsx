import React, { useRef } from "react";
import "./Login.css";

export default function Login() {
  const email = useRef();//input属性を監視する。（他の属性もJSXで参照可,ref={})
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); //loginを押してもリロードされなくなる。
    console.log(email.current.value);
    console.log(password.current.value);
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">
            The World Wide Connection In Real Time.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">ログインはこちら</p>
            <input
              type="email"
              className="loginInput"
              placeholder="Email"
              required
              ref= {email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="Password"
              required
              minLength="6"
              ref={password}
            />
            <button className="loginButton">Login</button>
            <span className="loginForgot">パスワードを変更</span>
            <button className="loginRegisterButton">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
