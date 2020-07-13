import React, { useContext, useEffect } from 'react';
import { MusicContext } from '../../context/MusicContext';
import { FaPlay as Play, FaPause as Pause } from 'react-icons/fa';

const MusicPlayerPlay = ({ togglePlay, play }) => {
  const { music, musicDispatch } = useContext(MusicContext);
  const { musicInfo } = music;

  return (
    <div onClick={togglePlay}>
      {play && <Pause />}
      {!play && <Play />}
    </div>
  );
};

export default MusicPlayerPlay;
