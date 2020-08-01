import React, { useEffect } from 'react';
import UserTrackImage from './UserTrackImage';
import UserTrackTop from './UserTrackTop';
import UserTrackMiddle from './UserTrackMiddle';
import UserTrackBottom from './UserTrackBottom';

const UserTrack = ({ trackInfo }) => {
  const {
    TrackArtwork,
    TrackLikesCount,
    TrackPlaybackCount,
    TrackId,
    TrackDuration,
  } = trackInfo;

  return (
    <li className="usertrack">
      <div className="usertrack__container__left">
        <UserTrackImage imageURL={TrackArtwork} />
      </div>
      <ul className="usertrack__container__right">
        <UserTrackTop trackInfo={trackInfo} />
        <UserTrackMiddle trackid={TrackId} trackDuration={TrackDuration} />
        <UserTrackBottom
          trackLiked={TrackLikesCount}
          trackPlaybackCount={TrackPlaybackCount}
        />
      </ul>
    </li>
  );
};

export default UserTrack;
