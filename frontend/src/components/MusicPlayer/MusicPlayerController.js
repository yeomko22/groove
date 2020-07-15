import React, { useEffect, useState, useRef } from 'react';
import MusicPlayerMusicInfo from './MusicPlayerMusicInfo';
import MusicPlayerButtons from './MusicPlayerButtons';
import MusicPlayerSide from './MusicPlayerSide';
import MusicPlayerSlider from './MusicPlayerSlider';

const MusicPlayerController = ({
  audio,
  play,
  setPlay,
  time,
  duration,
  handleChangeTime,
  musicInfo,
}) => {
  return (
    <div className="musiccontroller">
      <MusicPlayerSlider
        time={time}
        duration={duration}
        play={play}
        handleChangeTime={handleChangeTime}
      />
      <div className="musiccontroller__container">
        <MusicPlayerMusicInfo musicInfo={musicInfo} />
        <MusicPlayerButtons
          audio={audio}
          play={play}
          setPlay={setPlay}
          isMusicSet={duration === 0 || isNaN(duration)}
        />
        <MusicPlayerSide time={time} duration={duration} />
      </div>
    </div>
  );
};

export default MusicPlayerController;
