import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = ({ handleId }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:4000/auth/register",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      //   localStorage.setItem("user", JSON.stringify(response.data));
      handleId(response.data._id);
      navigate("/");
    } catch (err) {
      setError("This email or username is already taken");
      console.log(err);
    }
  };

  return (
    <div className="signup">
      <span className="signupTitle">Sign Up</span>
      <form className="signupForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="signupButton" type="submit">
          Sign Up
        </button>
      </form>
      <button className="signupLoginButton">
        <a href="/login">Login</a>
      </button>
      <span className="signupError">{error}</span>
    </div>
  );
};

export default Signup;
