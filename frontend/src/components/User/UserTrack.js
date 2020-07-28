import React from 'react';
import UserTrackImage from './UserTrackImage';
import { FaPlayCircle as Play, FaHeart as Liked } from 'react-icons/fa';

const UserTrack = ({ trackInfo }) => {
  const {
    TrackArtwork,
    TrackUserName,
    TrackTitle,
    TrackLikesCount,
    TrackPlaybackCount,
  } = trackInfo;
  return (
    <li className="usertrack">
      <UserTrackImage imageURL={TrackArtwork} />
      <ul className="usertrack__container">
        <li className="usertrack__top">
          <Play className="usertrack__top__playbutton" />
          <div>
            <h4 className="usertrack__top--username">{TrackUserName}</h4>
            <h3>{TrackTitle}</h3>
          </div>
        </li>

        <li className="usertrack__middle">player 자리</li>

        <li className="usertrack__bottom">
          <span className="usertrack__bottom--liked">
            <Liked className="usertrack__bottom--liked--icon" />
            {`${TrackLikesCount} Liked`}
          </span>
          <span className="usertrack__bottom--liked">
            {`This song is playbacked ${TrackPlaybackCount} times.`}
          </span>
        </li>
      </ul>
    </li>
  );
};

export default UserTrack;
