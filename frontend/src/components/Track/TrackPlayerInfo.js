import React from 'react';
import TrackPlayerButton from './TrackPlayerButton';
import WaveFormMain from '../WaveForm/WaveFormMain';
import { Link } from 'react-router-dom';

const TrackPlayerInfo = ({ track }) => {
  const {
    TrackUserName,
    TrackTitle,
    TrackId,
    TrackDuration,
    TrackUserId,
  } = track;
  return (
    <div className="trackplayer__infocontainer">
      <div className="trackplayer__info">
        <TrackPlayerButton track={track} />
        <div>
          <Link to={`/${TrackUserId}`}>
            <span className="link trackplayer__info--text">
              {TrackUserName}
            </span>
          </Link>

          <span className="trackplayer__info--text">{TrackTitle}</span>
        </div>
      </div>
      <WaveFormMain trackid={TrackId} duration={TrackDuration} />
    </div>
  );
};

export default TrackPlayerInfo;
