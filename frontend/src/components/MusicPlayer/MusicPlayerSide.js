import React from 'react';
import secToTimeFormat from '../../utils/secToTimeFormat';

const MusicPlayerSide = ({ time, duration }) => {
  return (
    <>
      <span className="musiccontroller__time">{`${secToTimeFormat(
        time,
      )} / ${secToTimeFormat(duration)}`}</span>
    </>
  );
};

export default MusicPlayerSide;
