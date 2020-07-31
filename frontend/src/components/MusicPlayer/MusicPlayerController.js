import React, { useContext } from 'react';
import MusicPlayerMusicInfo from './MusicPlayerMusicInfo';
import MusicPlayerButtons from './MusicPlayerButtons';
import MusicPlayerSide from './MusicPlayerSide';
import MusicPlayerSlider from './MusicPlayerSlider';
import { MusicContext } from '../../context/MusicContext';

const MusicPlayerController = ({ audio, handleChangeTime }) => {
  const { music } = useContext(MusicContext);
  const { duration } = music;

  return (
    <div className="musiccontroller">
      <MusicPlayerSlider handleChangeTime={handleChangeTime} />
      <div className="musiccontroller__container">
        <MusicPlayerMusicInfo />
        <MusicPlayerButtons
          audio={audio}
          isMusicSet={duration === 0 || isNaN(duration)}
        />
        <MusicPlayerSide />
      </div>
    </div>
  );
};

export default MusicPlayerController;
