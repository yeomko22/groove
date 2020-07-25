import React from 'react';

const TrackBoardUserInfo = ({ userProfileImage, username }) => {
  return (
    <div className="trackboard__info">
      <img src={userProfileImage} className="trackboard__info--image" />
      <div>{username}</div>
    </div>
  );
};

export default TrackBoardUserInfo;
