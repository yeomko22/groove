import React from 'react';
import TrackImage from './TrackPlayerImage';
import TrackPlayerInfo from './TrackPlayerInfo';

const TrackPlayer = ({ track }) => {
  const { TrackArtwork } = track;

  return (
    <div className="trackplayer__container">
      <TrackPlayerInfo track={track} />
      <TrackImage trackImageURL={TrackArtwork} />
    </div>
  );
};

export default TrackPlayer;
