import React, { useEffect, useState, useRef } from 'react';
import TrackImage from './TrackPlayerImage';
import TrackPlayerInfo from './TrackPlayerInfo';
import getTrackBackground from '../../utils/getTrackBackground';

const TrackPlayer = ({ track }) => {
  const { TrackArtwork, TrackId } = track;
  const trackPlayerRef = useRef();

  useEffect(() => {
    if (TrackId !== undefined) getTrackBackground(TrackId, trackPlayerRef);
  }, [TrackId]);

  return (
    <article ref={trackPlayerRef} className="trackplayer">
      <TrackPlayerInfo track={track} />
      <TrackImage trackImageURL={TrackArtwork} />
    </article>
  );
};

export default TrackPlayer;
