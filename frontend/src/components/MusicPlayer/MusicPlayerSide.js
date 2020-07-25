import React, { useContext } from 'react';
import secToTimeFormat from '../../utils/secToTimeFormat';
import { MusicContext } from '../../context/MusicContext';

const MusicPlayerSide = () => {
  const { music } = useContext(MusicContext);
  const { time, duration } = music;
  return (
    <div className="musiccontroller__rightside">
      <span className="musiccontroller__time">{`${secToTimeFormat(
        time,
      )} / ${secToTimeFormat(duration)}`}</span>
    </div>
  );
};

export default MusicPlayerSide;
