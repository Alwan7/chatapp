/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */

import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.scss';

const Messages = ({ messages, username }) => (
  <ScrollToBottom className="chat-message">

    {messages.map((i) => {
      if (i.username === username) {
        return (
          <div className="message" key={i.username}>
            <span>{i.username}</span>
            <p>{i.text}</p>

          </div>
        );
      }
      return (
        <div className="message mess-right">
          <span>{i.username}</span>
          <p>
            {i.text}
            {' '}
          </p>

        </div>
      );
    })}

  </ScrollToBottom>
);
export default Messages;
