import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Home = ({ userId, handleId }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // const user = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(
          `http://localhost:4000/users/${userId}`
        );
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, [userId]);

  return (
    <div className="home">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Welcome back, {userData.username}!</h1>
          <p>Your email: {userData.email}</p>
          <p>Joined on: {new Date(userData.createdAt).toDateString()}</p>
          <button
            className="log-sign-but"
            onClick={() => {
              handleId();
            }}
          >
            LogOut
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
