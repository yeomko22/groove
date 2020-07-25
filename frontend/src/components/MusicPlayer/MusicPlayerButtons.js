import React, { useContext } from 'react';
import { MusicContext } from '../../context/MusicContext';
import {
  FaRandom as Randomize,
  FaPlay as Play,
  FaPause as Pause,
  FaStepBackward as Before,
  FaStepForward as Next,
  FaSync as Rotate,
} from 'react-icons/fa';

const MusicPlayerButtons = ({ isMusicSet }) => {
  const { music, musicDispatch } = useContext(MusicContext);
  const { isPlaying } = music;
  const handleClick = () => {
    if (isMusicSet) return;
    musicDispatch({ type: 'togglePlay' });
  };

  return (
    <div className="musiccontroller__buttons">
      <Randomize />
      <Before />
      <div className="musiccontroller__buttons__play">
        {isPlaying && <Pause onClick={handleClick} />}
        {!isPlaying && <Play onClick={handleClick} />}
      </div>
      <Next />
      <Rotate />
    </div>
  );
};

export default MusicPlayerButtons;
