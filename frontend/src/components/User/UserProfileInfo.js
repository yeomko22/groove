import React from 'react';

const UserProfileInfo = ({ userinfo }) => {
  const [username, userDescription] = userinfo;
  return (
    <div className="userprofile__info">
      <h2 className="userprofile__info--text">{username}</h2>
      <div className="userprofile__info--text">{userDescription}</div>
    </div>
  );
};

export default UserProfileInfo;
