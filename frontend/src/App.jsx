/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import React from 'react';
import io from 'socket.io-client';
import Homepage from './components/home/home';
import Chat from './components/chat/chat';

const socket = io.connect('/');
function Appmain({ match }) {
  return (
    <>
      <div className="right">
        <Chat username={match.params.username} socket={socket} />
      </div>
    </>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Homepage socket={socket} />
          </Route>
          <Route path="/chat/:username" component={Appmain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
