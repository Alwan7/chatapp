import "./chat.scss";

import React, { useState, useEffect} from "react";

import Input from "../Input/Input";
import Messages from "../Messages/Messages";

function Chat({ username, socket }) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    socket.on("message", (data) => {
      //decypt
      const ans = (data.text);
     
      let temp = messages;
      temp.push({
        userId: data.userId,
        username: data.username,
        text: ans,
      });
      setMessages([...temp]);
    });
  }, [socket]);

  const sendData = () => {
    if (text !== "") {
      //encrypt here
      const ans = text;
      socket.emit("chat", ans);
      setText("");
    }
  };
  
  console.log(messages, "mess");

  return (
    <div className="outerContainer">
      <div className="container">
        <h2>
          {username} <span style={{ fontSize: "0.7rem" }}></span>
        </h2>
      
      < Messages messages={messages} username={username} />
      
        < Input text={text} setText={setText} sendData={sendData} />
        </div>
    </div>
  );
}
export default Chat;
