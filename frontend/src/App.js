import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHLS from 'react-hls';


function App() {
  return (
    <div className="App">
      hello groove
      <ReactHLS url={"http://localhost:8090/sample2/playlist.m3u8"} />
    </div>
  );
}

export default App;
