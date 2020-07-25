import React from 'react';
import TrackImage from './TrackPlayerImage';
import TrackPlayerInfo from './TrackPlayerInfo';

const TrackPlayer = ({ track }) => {
  const { TrackArtwork } = track;

  return (
    <article className="trackplayer">
      <TrackPlayerInfo track={track} />
      <TrackImage trackImageURL={TrackArtwork} />
    </article>
  );
};

export default TrackPlayer;
