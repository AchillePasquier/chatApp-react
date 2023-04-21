import "./Conversation.css";
import avatar from "../img/noAvatar.png";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Conversation = ({ conversation, connectedUser }) => {
  const [user, setUser] = useState(null);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== connectedUser);

    const getUser = async () => {
      try {
        const res = await axios(`http://localhost:4000/users/${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [connectedUser, conversation]);

  // console.log(user);

  return (
    <div className="conversation">
      <img className="conversationImg" src={avatar} alt="" />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
};

export default Conversation;
