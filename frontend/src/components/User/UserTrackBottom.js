import React from 'react';
import { FaHeart as Liked } from 'react-icons/fa';

const UserTrackBottom = ({ trackLiked, tarckPlaybackCount }) => {
  return (
    <li className="usertrack__bottom">
      <span className="usertrack__bottom--liked">
        <Liked className="usertrack__bottom--liked--icon" />
        {`${trackLiked} Liked`}
      </span>
      <span className="usertrack__bottom--liked">
        {`This song is playbacked ${tarckPlaybackCount} times.`}
      </span>
    </li>
  );
};

export default UserTrackBottom;
