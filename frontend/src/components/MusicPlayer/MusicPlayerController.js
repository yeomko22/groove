import React, { useEffect, useState, useRef } from 'react';
import MusicPlayerMusicInfo from './MusicPlayerMusicInfo';
import MusicPlayerButtons from './MusicPlayerButtons';
import MusicPlayerSide from './MusicPlayerSide';

const MusicPlayerController = ({
  audio,
  play,
  setPlay,
  time,
  duration,
  handleChangeTime,
  musicInfo,
}) => {
  const sliderRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    if (!(duration === 0 || isNaN(duration)))
      setSliderPosition((time / duration) * 500);
  }, [time]);

  const hadleSliderChange = (e) => {
    if (duration === 0 || isNaN(duration)) return;
    const position = e.target.value;
    setSliderPosition(position);
    handleChangeTime((position * duration) / 500);
  };

  return (
    <div className="musiccontroller">
      <input
        className="musiccontroller__musicslider"
        type="range"
        ref={sliderRef}
        min={0}
        max={500}
        value={sliderPosition}
        onChange={hadleSliderChange}
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
