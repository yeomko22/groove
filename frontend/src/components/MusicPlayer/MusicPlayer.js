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
      time: 0,
      duration: 0,
      trackHls: '',
      musicInfo: {},
    };
    this.audioRef = React.createRef();
  }

  handleChangeTime = (time) => {
    const audio = this.audioRef.current;
    audio.currentTime = time;
  };

  componentDidMount() {
    const audio = this.audioRef.current;
    setInterval(() => {
      const { musicDispatch } = this.context;
      musicDispatch({ type: 'setDuration', duration: audio.duration });
      musicDispatch({ type: 'setTime', time: audio.currentTime });
    }, 1000);
  }

  componentDidUpdate(_, prevState) {
    const audio = this.audioRef.current;
    const { music } = this.context;
    const { musicInfo } = music;
    const { TrackHls, time } = musicInfo;

    if (prevState.trackHls !== TrackHls) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.attachMedia(audio);
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          hls.loadSource(`${SERVER_IP}/hls/${TrackHls}/playlist.m3u8`);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            audio.play();
          });
        });
      }
      this.setState({ trackHls: TrackHls });
      this.setState({ musicInfo: musicInfo });
    }

    const { isPlaying } = music;
    if (isPlaying) audio.play();
    else audio.pause();
  }

  render() {
    const audio = this.audioRef.current;
    return (
      <>
        <audio ref={this.audioRef}></audio>
        <MusicPlayerController
          audio={audio}
          handleChangeTime={this.handleChangeTime}
        />
      </>
    );
  }
}

MusicPlayer.contextType = MusicContext;
export default MusicPlayer;
