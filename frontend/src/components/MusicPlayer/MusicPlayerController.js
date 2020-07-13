import React from 'react';
import MusicPlayerPlay from './MusicPlayerPlay';

const MusicPlayerController = ({ togglePlay, play }) => {
  return (
    <div className="musiccontroller">
      <div className="musiccontroller__container">
        <MusicPlayerPlay togglePlay={togglePlay} play={play} />
        <span>0:00/3:00</span>
        <input className="musiccontroller__musicslider" type="range" />
      </div>
    </div>
  );
};

export default MusicPlayerController;
