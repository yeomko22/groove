import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import { MusicProvider } from './context/MusicContext';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import TrackMain from './components/Track/TrackMain';
import UserMain from './components/User/UserMain';

// "http://localhost:8090/hls/sample2/playlist.m3u8"

function App() {
  return (
    <MusicProvider>
      <Navigation />
      <div className="section__container">
        <Switch>
          <Route path="/:user/:trackID">
            <TrackMain />
          </Route>
          <Route path="/:user">
            <UserMain />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
      <MusicPlayer />
    </MusicProvider>
  );
}

export default App;
