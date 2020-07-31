import React, { useEffect, useState } from 'react';
import './WaveFormMain.scss';
import axios from 'axios';
import { SERVER_IP } from '../../utils/const';
import WaveFormStick from './WaveFormStick';

const WaveFormMain = ({ trackid }) => {
  const [waves, setWaves] = useState([]);
  const partial = 120;

  useEffect(() => {
    const getWave = async () => {
      const { data } = await axios(`${SERVER_IP}/api/waveform/${trackid}`);
      const { wave } = await data;
      const waveLen = wave.length;
      const interval = waveLen / partial;
      const waves = [];

      for (let i = 0; i < waveLen / interval; i++) {
        const sliced = wave.slice(i * interval, i * interval + interval);
        const sum = sliced.reduce((a, b) => a + b, 0);
        const avg = sum / sliced.length;
        waves.push(avg);
      }

      setWaves(waves);
    };
    if (trackid !== undefined) getWave();
  }, [trackid]);

  return (
    <div className="waveform">
      {waves.map((height, idx) => (
        <WaveFormStick key={idx} height={height} />
      ))}
    </div>
  );
};

export default WaveFormMain;
