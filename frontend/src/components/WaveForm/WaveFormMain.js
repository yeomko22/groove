import React, { useEffect, useState } from 'react';
import './WaveFormMain.scss';
import axios from 'axios';
import { SERVER_IP } from '../../utils/const';
import WaveFormStick from './WaveFormStick';
import WaveFormTime from './WaveFormTime';

const WaveFormMain = ({ trackid, duration }) => {
  const partial = 150;
  const emptyWaves = new Array(partial).fill(100);
  const [waves, setWaves] = useState(emptyWaves);

  useEffect(() => {
    const getWave = async () => {
      try {
        const { data } = await axios(`${SERVER_IP}/api/waveform/${trackid}`);
        const { wave } = await data;
        const waveLen = wave.length;
        const interval = waveLen / partial;
        const waves = [];
        for (let i = 0; i < waveLen / interval; i++)
          waves.push(wave[parseInt(i * interval)]);
        setWaves(waves);
      } catch (e) {
        setWaves(emptyWaves);
      }
    };
    if (trackid !== undefined) getWave();
  }, [trackid]);

  return (
    <div className="waveform">
      <div className="waveform__sticks">
        {waves.map((height, idx) => (
          <WaveFormStick
            key={idx}
            partial={partial}
            idx={idx}
            height={height}
            trackid={trackid}
          />
        ))}
      </div>
      <WaveFormTime trackid={trackid} duration={duration} />
    </div>
  );
};

export default WaveFormMain;
