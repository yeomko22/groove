import React, { useEffect, useState } from 'react';
import TrackImage from './TrackPlayerImage';
import TrackPlayerInfo from './TrackPlayerInfo';
import { getBackgroundColor } from '../../utils/backgroundColor';

const TrackPlayer = ({ track }) => {
  const { TrackArtwork, TrackColor } = track;
  const [colors, setColors] = useState([255, 255, 255]);

  useEffect(() => {
    if (TrackColor !== undefined) setColors(TrackColor.split('|'));
  }, [TrackColor]);

  return (
    <article
      className="trackplayer"
      style={{
        background: getBackgroundColor(colors),
      }}
    >
      <TrackPlayerInfo track={track} />
      <TrackImage trackImageURL={TrackArtwork} />
    </article>
  );
};

export default TrackPlayer;
