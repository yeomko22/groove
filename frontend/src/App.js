import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';

// "http://localhost:8090/hls/sample2/playlist.m3u8"

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route path="/:user/:music">음악</Route>
        <Route path="/:user">트랙</Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
