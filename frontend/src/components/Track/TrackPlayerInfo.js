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
        <span className="trackplayer__info--text">{TrackUserName}</span>
        <span className="trackplayer__info--text">{TrackTitle}</span>
        <WaveFormMain trackid={TrackId} />
      </div>
    </div>
  );
};

export default TrackPlayerInfo;