import React from 'react';
import TrackPlayerButton from './TrackPlayerButton';
import WaveFormMain from '../WaveForm/WaveFormMain';

const TrackPlayerInfo = ({ track }) => {
  const { TrackUserName, TrackTitle, TrackId, TrackDuration } = track;
  return (
    <div className="trackplayer__infocontainer">
      <div className="trackplayer__info">
        <TrackPlayerButton track={track} />
        <div>
          <span className="trackplayer__info--text">{TrackUserName}</span>
          <span className="trackplayer__info--text">{TrackTitle}</span>
        </div>
      </div>
      <WaveFormMain trackid={TrackId} duration={TrackDuration} />
    </div>
  );
};

export default TrackPlayerInfo;
