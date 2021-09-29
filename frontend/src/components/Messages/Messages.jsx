import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.scss';







const Messages = ({ messages, username }) => (
  <ScrollToBottom className="chat-message">


        {messages.map((i) => {
          if (i.username === username) {
            return (
              <div className="message">
                <p>{i.text}</p>
                <span>{i.username}</span>
              </div>
            )
          } else {
            return (
              <div className="message mess-right">
                <p>{i.text} </p>
                <span>{i.username}</span>
              </div>
            );
          }
        })}
        
    
  </ScrollToBottom>
)
  export default Messages;