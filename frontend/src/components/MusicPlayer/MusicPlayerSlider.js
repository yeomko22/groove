import React, { useRef, useState, useEffect, useContext } from 'react';
import { MusicContext } from '../../context/MusicContext';

const MusicPlayerSlider = ({ handleChangeTime }) => {
  const sliderRef = useRef();
  const playedRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const { music } = useContext(MusicContext);
  const { isPlaying, time, duration } = music;

  useEffect(() => {
    if (!(duration === 0 || isNaN(duration)) && isPlaying) {
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
