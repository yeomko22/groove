import React from 'react';
import secToTimeFormat from '../../utils/secToTimeFormat';

const MusicPlayerSide = ({ time, duration }) => {
  return (
    <div className="musiccontroller__rightside">
      <span className="musiccontroller__time">{`${secToTimeFormat(
        time,
      )} / ${secToTimeFormat(duration)}`}</span>
    </div>
  );
};

export default MusicPlayerSide;
