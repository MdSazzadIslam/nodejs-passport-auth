import React, { useState } from "react";
import authService from "../services/authService";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitLogin = async (e, email, passpord) => {
    e.preventDefault();
    const data = {
      email: email,
      password: passpord,
    };
    await authService.login(data);
  };
  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          submitLogin(e, email, password);
        }}
      >
        <input
          type="text"
          placeholder="Enter email"
          required={true}
          onChange={(e) => setEmail(("email", e.target.value))}
        />

        <input
          type="password"
          placeholder="Enter password"
          required={true}
          onChange={(e) => setPassword(("password", e.target.value))}
        />
        <button className="button" type="submit">
          Login
        </button>
        <div>
          <Link to="/register">New user click here</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
