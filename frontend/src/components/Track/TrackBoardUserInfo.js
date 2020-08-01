import React from 'react';
import { Link } from 'react-router-dom';

const TrackBoardUserInfo = ({ userProfileImage, username, userid }) => {
  return (
    <div className="trackboard__info">
      <img src={userProfileImage} className="trackboard__info--image" />
      <Link to={`/${userid}`} className="trackboard__info">
        <div className="link">{username}</div>
      </Link>
    </div>
  );
};

export default TrackBoardUserInfo;
