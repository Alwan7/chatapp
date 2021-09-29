import React, { useState, useEffect } from "react";
import "./home.scss";
import { Link } from "react-router-dom";

function Homepage({ socket }) {
  const [username, setusername] = useState(
    JSON.parse(localStorage.getItem("name")) );
  
  useEffect(() => {
  // storing input name
  localStorage.setItem("name", JSON.stringify(username));
  }, [username]);
  

  const sendData = () => {
    if (username !== "" ) {
      socket.emit("joinRoom", { username});
    } else {
      alert("username are must !");
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
        placeholder=''
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
