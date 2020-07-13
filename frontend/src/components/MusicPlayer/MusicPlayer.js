import React, { useContext, useEffect, useRef, useState } from 'react';
import { MusicContext } from '../../context/MusicContext';
import './MusicPlayer.scss';
import { SERVER_IP } from '../../const';
import Hls from 'hls.js';
import MusicPlayerController from './MusicPlayerController';

const MusicPlayer = () => {
  const { music } = useContext(MusicContext);
  const { musicInfo } = music;
  const { TrackHls } = musicInfo;
  const audioRef = useRef();
  const audio = audioRef.current;
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.attachMedia(audio);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(`${SERVER_IP}/hls/${TrackHls}/playlist.m3u8`);
        hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
          audio.play();
          setPlay(true);
        });
      });
    }
  }, [musicInfo.TrackHls]);

  const togglePlay = () => {
    if (play) audio.pause();
    else audio.play();
    setPlay(!play);
    console.log(audio.currentTime);
  };

  return (
    <div>
      <audio
        controls
        ref={audioRef}
        style={{ position: 'fixed', top: '100px' }}
      ></audio>
      <MusicPlayerController play={play} togglePlay={togglePlay} />
    </div>
  );
};

export default MusicPlayer;
