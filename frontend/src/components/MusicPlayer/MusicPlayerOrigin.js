import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { MusicContext } from '../../context/MusicContext';
import './MusicPlayer.scss';
import { SERVER_IP } from '../../utils/const';
import Hls from 'hls.js';
import MusicPlayerController from './MusicPlayerController';

const MusicPlayer = () => {
  const { music } = useContext(MusicContext);
  const { musicInfo } = music;
  const { TrackHls } = musicInfo;
  const audioRef = useRef();
  const audio = audioRef.current;
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(0);
  // const [audio, play, time, duration] = useAudioRef();
  // console.log(audio, play, time, duration);

  useEffect(() => {
    console.log(audio?.paused);
  }, [audio?.paused]);

  useEffect(() => {
    console.log(audio?.currentTime);
  }, [audio?.currentTime]);
  console.log(audio?.currentTime);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTime(audiommm?.currentTime);
      i += 1;
      console.log('dd');
      console.log(audio?.currentTime);
    }, 1000);
    // console.log(interval);
    // if (!play) clearInterval(interval);
  }, []);

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

  return (
    <div>
      <audio
        controls
        ref={audioRef}
        style={{ position: 'fixed', top: '100px' }}
      ></audio>
      <div style={{ position: 'fixed', top: '200px' }}>{time}</div>
      <MusicPlayerController
        audio={audio}
        play={play}
        setPlay={setPlay}
        TrackHls={TrackHls}
      />
    </div>
  );
};

const useAudioRef = () => {
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const ref = useCallback((node) => {
    if (node !== null) {
      setPlay(!node.paused);
      setTime(node.currentTime);
      setDuration(node.duration);
    }
  }, []);
  return [ref, play, time, duration];
};

export default MusicPlayer;
