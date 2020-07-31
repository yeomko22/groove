import React from 'react';
import TrackPlayerButton from './TrackPlayerButton';
import WaveFormMain from '../WaveForm/WaveFormMain';

const TrackPlayerInfo = ({ track }) => {
  // console.log(track);
  const { TrackUserName, TrackTitle, TrackId } = track;
  return (
    <div className="trackplayer__info">
      <TrackPlayerButton track={track} />
      <div>
        <div className="trackplayer__info--text">{TrackUserName}</div>
        <div className="trackplayer__info--text">{TrackTitle}</div>
        <WaveFormMain trackid={TrackId} />
      </div>
    </div>
  );
};

export default TrackPlayerInfo;
