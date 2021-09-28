import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Homepage({ socket }) {
  const [username, setusername] = useState("");
  

  const sendData = () => {
    if (username !== "" ) {
      socket.emit("joinRoom", { username});
    } else {
      alert("username and roomname are must !");
      window.location.reload();
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className='joinInnerContainer'>
        <h1 className='heading'>Welcome to ChatApp</h1>
        <div>
          <input
        className='joinInput'
        placeholder="Input your user name"
        value={username}
        onChange={(e) => setusername(e.target.value)}
          ></input>
          </div>
      
      <Link to={`/chat/${username}`}>
        <button className={'button mt-20'} onClick={sendData}>Join</button>
      </Link>
      </div>
    </div>
  );
}

export default Homepage;