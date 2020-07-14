import React, { useContext, useEffect, useState } from 'react';
import { MusicContext } from '../../context/MusicContext';
import { FaPlay as Play, FaPause as Pause } from 'react-icons/fa';

const MusicPlayerPlay = ({ audio, play, setPlay }) => {
  const { music, musicDispatch } = useContext(MusicContext);
  const { musicInfo } = music;

  const handleClick = () => {
    if (play) audio.pause();
    else audio.play();
    setPlay(!play);
  };

  return (
    <div onClick={handleClick}>
      {play && <Pause />}
      {!play && <Play />}
    </div>
  );
};

export default MusicPlayerPlay;
