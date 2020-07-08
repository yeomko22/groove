import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileUsername from './ProfileUsername';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileImage />
      <ProfileUsername />
    </div>
  );
};

export default Profile;
