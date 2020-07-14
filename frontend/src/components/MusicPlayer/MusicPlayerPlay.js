import React from 'react';
import { FaPlay as Play, FaPause as Pause } from 'react-icons/fa';

const MusicPlayerPlay = ({ audio, play, setPlay }) => {
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
