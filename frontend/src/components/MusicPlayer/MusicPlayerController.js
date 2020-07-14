import React, { useEffect, useState, useRef } from 'react';
import secToTimeFormat from '../../utils/secToTimeFormat';
import MusicPlayerPlay from './MusicPlayerPlay';

const MusicPlayerController = ({
  audio,
  play,
  setPlay,
  time,
  duration,
  handleChangeTime,
}) => {
  const sliderRef = useRef();
  const slider = sliderRef.current;
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    if (slider !== null && slider !== undefined) {
      setSliderPosition((time / duration) * 1000);
    }
  }, [time]);

  const hadleSliderChange = (e) => {
    const position = e.target.value;
    setSliderPosition(position);
    handleChangeTime((position * duration) / 1000);
  };

  return (
    <div className="musiccontroller">
      <div className="musiccontroller__container">
        <MusicPlayerPlay audio={audio} play={play} setPlay={setPlay} />
        <span>{`${secToTimeFormat(time)}`}</span>
        <input
          className="musiccontroller__musicslider"
          type="range"
          ref={sliderRef}
          min={0}
          max={1000}
          value={sliderPosition}
          onChange={hadleSliderChange}
        />
        <span>{`${secToTimeFormat(duration)}`}</span>
      </div>
    </div>
  );
};

export default MusicPlayerController;
