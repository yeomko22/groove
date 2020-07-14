import React from 'react';
import { FaPlay as Play, FaPause as Pause } from 'react-icons/fa';

const MusicPlayerPlay = ({ play, setPlay }) => {
  const handleClick = () => {
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
