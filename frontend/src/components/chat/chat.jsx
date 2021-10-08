/* eslint-disable linebreak-style */
import './chat.scss';
import React, { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

// eslint-disable-next-line react/prop-types
function Chat({ username, socket }) {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    socket.on('message', (data) => {
      const ans = (data.text);

      const temp = messages;
      temp.push({
        userId: data.userId,
        username: data.username,
        text: ans,
      });
      setMessages([...temp]);
    });
  }, [socket]);

  const sendData = () => {
    if (text !== '') {
      // encrypt here
      const ans = text;
      // eslint-disable-next-line react/prop-types
      socket.emit('chat', ans);
      setText('');
    }
  };
  return (
    <div className="outerContainer">
      <div className="container">

        <Messages messages={messages} username={username} />

        <Input text={text} setText={setText} sendData={sendData} />
      </div>
    </div>
  );
}
export default Chat;
