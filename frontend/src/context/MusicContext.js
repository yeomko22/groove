import React, { useReducer, createContext } from 'react';

const reducer = (state, action) => {
  const { type, musicInfo } = action;
  switch (type) {
    case 'setMusic':
      return { musicInfo };
    default:
      throw new Error();
  }
};

const initialState = { musicInfo: { TrackHls: '' } };
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
