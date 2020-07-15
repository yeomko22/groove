import React, { useRef, useState, useEffect, useCallback } from 'react';

const MusicPlayerSlider = ({ time, duration, play, handleChangeTime }) => {
  const sliderRef = useRef();
  const playedRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    if (!(duration === 0 || isNaN(duration)) && play) {
      setSliderWidth(playedRef.current.offsetParent.clientWidth);
      setSliderPosition((time / duration) * 500);
    }
  }, [time]);

  const hadleSliderChange = (e) => {
    if (duration === 0 || isNaN(duration)) return;
    const position = e.target.value;
    setSliderPosition(position);
    handleChangeTime((position * duration) / 500);
  };

  return (
    <div className="musiccontroller__musicslider">
      <div
        className="musiccontroller__musicslider--progressbar"
        ref={playedRef}
        style={{ width: (sliderPosition / 500) * sliderWidth }}
      ></div>
      <input
        type="range"
        ref={sliderRef}
        min={0}
        max={500}
        value={sliderPosition}
        onChange={hadleSliderChange}
      />
    </div>
  );
};

export default MusicPlayerSlider;
