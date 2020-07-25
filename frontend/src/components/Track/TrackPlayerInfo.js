import React from 'react';
import TrackPlayerButton from './TrackPlayerButton';

const TrackPlayerInfo = ({ track }) => {
  console.log(track);
  const { TrackUserName, TrackTitle, TrackHls } = track;
  return (
    <div className="trackplayer__info">
      <TrackPlayerButton track={track} />
      <div>
        <div className="trackplayer__info--text">{TrackUserName}</div>
        <div className="trackplayer__info--text">{TrackTitle}</div>
      </div>
    </div>
  );
};

export default TrackPlayerInfo;
