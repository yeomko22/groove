import React, { useContext } from 'react';
import { MusicContext } from '../../context/MusicContext';
import { FaPlayCircle as Play } from 'react-icons/fa';

const MusicModuleItemPlay = ({ musicInfo }) => {
  const { musicDispatch } = useContext(MusicContext);
  const handlePlay = () => musicDispatch({ type: 'setMusic', musicInfo });
  return (
    <div onClick={handlePlay}>
      <Play className="musicmodule__item--button" />
    </div>
  );
};

export default MusicModuleItemPlay;
