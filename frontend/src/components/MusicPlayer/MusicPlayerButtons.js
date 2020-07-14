import React from 'react';
import {
  FaRandom as Randomize,
  FaPlay as Play,
  FaPause as Pause,
  FaStepBackward as Before,
  FaStepForward as Next,
  FaSync as Rotate,
} from 'react-icons/fa';

const MusicPlayerButtons = ({ play, setPlay, isMusicSet }) => {
  const handleClick = () => {
    if (isMusicSet) return;
    setPlay(!play);
  };
  return (
    <div className="musiccontroller__buttons">
      <Randomize />
      <Before />
      <div className="musiccontroller__buttons__play">
        {play && <Pause onClick={handleClick} />}
        {!play && <Play onClick={handleClick} />}
      </div>
      <Next />
      <Rotate />
    </div>
  );
};

export default MusicPlayerButtons;
