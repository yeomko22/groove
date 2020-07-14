import React, { useEffect, useState, useCallback } from 'react';
import MusicPlayerPlay from './MusicPlayerPlay';

const MusicPlayerController = ({ audio, play, setPlay, TrackHls }) => {
  const [time, setTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const formatTime = (time = 0, interval) => {
    if (isNaN(time)) time = 0;
    const sec_num = parseInt(time, 10); // don't forget the second param
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    if (hours == '00') return minutes + ':' + seconds;
    return hours + ':' + minutes + ':' + seconds;
  };

  const interval = setInterval(() => {
    setTime(formatTime(audio?.currentTime));
    setDuration(formatTime(audio?.duration));
  }, 1000);
  console.log(time);
  if (!play) clearInterval(interval);

  return (
    <div className="musiccontroller">
      <div className="musiccontroller__container">
        <MusicPlayerPlay audio={audio} play={play} setPlay={setPlay} />
        <span>{`${time}/${duration}`}</span>
        <input
          className="musiccontroller__musicslider"
          type="range"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default MusicPlayerController;
