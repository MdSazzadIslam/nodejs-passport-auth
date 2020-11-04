import React, { useState } from "react";
import authService from "../services/authService";
import { Link } from "react-router-dom";
import "./Login.css";

const Registration = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitRegistration = async (e, email, passpord) => {
    e.preventDefault();
    const data = {
      email: email,
      password: passpord,
    };
    await authService.registration(data);
  };
  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          submitRegistration(e, email, password);
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
          Register
        </button>
        <div>
          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
