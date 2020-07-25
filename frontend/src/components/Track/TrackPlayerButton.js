import React, { useContext } from 'react';
import { MusicContext } from '../../context/MusicContext';
import { FaPlayCircle as Play, FaPauseCircle as Pause } from 'react-icons/fa';

const TrackPlayerButton = ({ track }) => {
  const { music, musicDispatch } = useContext(MusicContext);
  const { musicInfo, isPlaying } = music;
  const { TrackHls } = track;

  const playNewMusic = () =>
    musicDispatch({ type: 'setMusic', musicInfo: track });
  const togglePlay = () => musicDispatch({ type: 'togglePlay' });

  if (musicInfo.TrackHls !== TrackHls)
    return (
      <Play className="trackplayer__info--button" onClick={playNewMusic} />
    );
  if (isPlaying)
    return <Pause className="trackplayer__info--button" onClick={togglePlay} />;
  return <Play className="trackplayer__info--button" onClick={togglePlay} />;
};

export default TrackPlayerButton;
