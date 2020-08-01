import React from 'react';
import WaveFormMain from '../WaveForm/WaveFormMain';

const UserTrackMiddle = ({ trackid, trackDuration }) => {
  return (
    <li className="usertrack__middle">
      <WaveFormMain trackid={trackid} duration={trackDuration} />
    </li>
  );
};

export default UserTrackMiddle;
