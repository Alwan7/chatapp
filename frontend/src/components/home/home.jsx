/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import './home.scss';
import { Link } from 'react-router-dom';

function Homepage({ socket }) {
  const [username, setusername] = useState(
    JSON.parse(localStorage.getItem('name')),
  );

  useEffect(() => {
  // storing input name
    localStorage.setItem('name', JSON.stringify(username));
  }, [username]);

  const sendData = () => {
    if (username !== '') {
      socket.emit('joinRoom', { username });
    } else {
      alert('username are must !');
      window.location.reload();
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">

        <input
          className="joinInput"
          placeholder=""
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <Link to={`/chat/${username}`}>

          <button className="button" onClick={sendData}><i className="fas fa-arrow-alt-circle-up fa-4x" /></button>
        </Link>
      </div>

    </div>
  );
}

export default Homepage;
