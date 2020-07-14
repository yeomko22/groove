import React from 'react';
import default_thumbnail from '../../assets/music_default_thumbnail.jpg';

const MusicPlayerMusicInfo = ({ musicInfo }) => {
  let { TrackArtworkThumbnail, TrackTitle, TrackUserName } = musicInfo;
  if (Object.keys(musicInfo).length === 0) {
    TrackArtworkThumbnail = default_thumbnail;
    TrackTitle = '오늘은 뭐 듣지?';
    TrackUserName = '음악을 재생해주세요.';
  }
  return (
    <div className="musiccontroller__music">
      <img
        className="musiccontroller__music__image"
        src={TrackArtworkThumbnail}
      />
      <div className="musiccontroller__music__info">
        <div className="musiccontroller__music__info--small">{TrackTitle}</div>
        <div className="musiccontroller__music__info--xsmall">
          {TrackUserName}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerMusicInfo;
