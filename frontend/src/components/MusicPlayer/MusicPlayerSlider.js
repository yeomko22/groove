import React, { useRef, useState, useEffect } from 'react';

const MusicPlayerSlider = ({ time, duration, play, handleChangeTime }) => {
  const sliderRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    if (!(duration === 0 || isNaN(duration)) && play)
      setSliderPosition((time / duration) * 500);
  }, [time]);

  const hadleSliderChange = (e) => {
    if (duration === 0 || isNaN(duration)) return;
    const position = e.target.value;
    setSliderPosition(position);
    handleChangeTime((position * duration) / 500);
  };
  return (
    <input
      className="musiccontroller__musicslider"
      type="range"
      ref={sliderRef}
      min={0}
      max={500}
      value={sliderPosition}
      onChange={hadleSliderChange}
    />
  );
};

export default MusicPlayerSlider;
