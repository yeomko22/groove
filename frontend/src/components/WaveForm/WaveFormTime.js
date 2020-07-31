import React, { useContext, useEffect, useState } from 'react';
import { MusicContext } from '../../context/MusicContext';
import secToTimeFormat from '../../utils/secToTimeFormat';

const WaveFormTime = ({ trackid, duration }) => {
  const { music } = useContext(MusicContext);
  const { time, musicInfo } = music;
  const [curTime, setCurTime] = useState(0);

  useEffect(() => {
    if (trackid === musicInfo.TrackId) setCurTime(time);
  }, [time]);

  return (
    <div className="waveform__time">
      <span className="waveform__time__cur">{secToTimeFormat(curTime)}</span>
      <span className="waveform__time__duration">
        {secToTimeFormat(duration / 1000)}
      </span>
    </div>
  );
};

export default WaveFormTime;
