import React, { useContext } from 'react';
import { MusicContext } from '../../context/MusicContext';
import { FaPlayCircle } from 'react-icons/fa';

const MusicModuleItemPlay = ({ musicInfo }) => {
  const { musicDispatch } = useContext(MusicContext);
  const handlePlay = () => musicDispatch({ type: 'setMusic', musicInfo });
  return (
    <div onClick={handlePlay}>
      <FaPlayCircle />
    </div>
  );
};

export default MusicModuleItemPlay;
