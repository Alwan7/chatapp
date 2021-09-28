import React from 'react';
import './Input.css';


const Input = ({ setText, sendData, text }) => (

  
  <div className='div'>
    <input
      
      className='input'
          type='text'
          placeholder="enter your message"
          value={text}
          onChange={({ target: { value } }) => setText(value)}
      onKeyPress={event => event.key === 'Enter' ? sendData(event) : null}
    ></input>
    
    
        <button className='sendButton' disabled={!text}  onClick={e => sendData(e)}>Send</button>
  </div>
)

export default Input;