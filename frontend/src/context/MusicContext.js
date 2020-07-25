import React, { useReducer, createContext } from 'react';

const reducer = (state, action) => {
  const { type, musicInfo } = action;
  switch (type) {
    case 'setMusic':
      return { isPlaying: true, musicInfo };
    case 'togglePlay':
      return { ...state, isPlaying: !state.isPlaying };
    default:
      throw new Error();
  }
};

const initialState = { musicInfo: { TrackHls: '' }, isPlaying: false };
const MusicContext = createContext(initialState);
const MusicProvider = ({ children }) => {
  const [music, musicDispatch] = useReducer(reducer, initialState);
  return (
    <MusicContext.Provider value={{ music, musicDispatch }}>
      {children}
    </MusicContext.Provider>
  );
};

export { MusicContext, MusicProvider };
