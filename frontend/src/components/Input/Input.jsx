/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';
import './Input.css';

const Input = ({ setText, sendData, text }) => (

  <div className="div">
    <input
      className="input"
      type="text"
      placeholder="enter your message"
      value={text}
      onChange={({ target: { value } }) => setText(value)}
      onKeyPress={(event) => (event.key === 'Enter' ? sendData(event) : null)}
    />

    <button className="sendButton" disabled={!text} onClick={(e) => sendData(e)}><i className="fas fa-arrow-alt-circle-up fa-4x" /></button>
  </div>
);

export default Input;
