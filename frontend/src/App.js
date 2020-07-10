import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import TrackMain from './components/Track/TrackMain';

// "http://localhost:8090/hls/sample2/playlist.m3u8"

function App() {
  return (
    <div className="App">
      <Navigation />

      <section className="section">
        <Switch>
          <Route path="/:user/:music">음악</Route>
          <Route path="/:user">
            <TrackMain />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
