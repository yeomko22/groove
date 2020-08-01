import React, { useContext, useState, useEffect } from 'react';
import { MusicContext } from '../../context/MusicContext';

const WaveFormStick = ({ idx, height, partial, trackid }) => {
  const { music } = useContext(MusicContext);
  const { time, duration, musicInfo } = music;
  const [color, setColor] = useState('grey');

  useEffect(() => {
    if (trackid === musicInfo.TrackId && (time / duration) * partial > idx)
      setColor(`rgb(56, 20,${100 + idx})`);
    else setColor('grey');
  }, [time]);

  return (
    <div
      className="waveform__stick"
      style={{ height: `${height / 2}px`, backgroundColor: `${color}` }}
    ></div>
  );
};

export default WaveFormStick;
