import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// "http://localhost:8090/hls/sample2/playlist.m3u8"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/:user/:music">음악</Route>
        <Route path="/:user">트랙</Route>
        <Route path="/">메인</Route>
      </Switch>
    </div>
  );
}

export default App;
