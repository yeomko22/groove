import React, { Component } from 'react';
import { MusicContext } from '../../context/MusicContext';
import './MusicPlayer.scss';
import { SERVER_IP } from '../../utils/const';
import Hls from 'hls.js';
import MusicPlayerController from './MusicPlayerController';

class MusicPlayer extends Component {
  constructor() {
    super();
    this.state = {
      play: false,
      time: 0,
      duration: 0,
      trackHls: '',
      musicInfo: {},
    };
    this.audioRef = React.createRef();
  }

  setPlay = (play) => {
    this.setState({ play: play });
  };

  setTime = (time) => {
    this.setState({ time: time });
  };

  setDuration = (duration) => {
    this.setState({ duration: duration });
  };

  handleChangeTime = (time) => {
    const audio = this.audioRef.current;
    audio.currentTime = time;
  };

  componentDidMount() {
    const audio = this.audioRef.current;
    setInterval(() => {
      this.setDuration(audio.duration);
      this.setTime(audio.currentTime);
    }, 1000);
  }

  componentDidUpdate(_, prevState) {
    const audio = this.audioRef.current;
    const { music } = this.context;
    const { musicInfo } = music;
    const { TrackHls } = musicInfo;

    if (prevState.trackHls !== TrackHls) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.attachMedia(audio);
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          hls.loadSource(`${SERVER_IP}/hls/${TrackHls}/playlist.m3u8`);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            audio.play();
            this.setPlay(true);
          });
        });
      }
      this.setState({ trackHls: TrackHls });
      this.setState({ musicInfo: musicInfo });

      const { play } = this.state;
      if (play) audio.play();
      else audio.pause();
    }
  }

  render() {
    const audio = this.audioRef.current;
    const { play, time, duration, musicInfo } = this.state;
    const { TrackHls } = this.context.music.musicInfo;
    return (
      <>
        <audio ref={this.audioRef}></audio>
        <MusicPlayerController
          audio={audio}
          play={play}
          setPlay={this.setPlay}
          TrackHls={TrackHls}
          time={time}
          duration={duration}
          handleChangeTime={this.handleChangeTime}
          musicInfo={musicInfo}
        />
      </>
    );
  }
}

MusicPlayer.contextType = MusicContext;
export default MusicPlayer;
