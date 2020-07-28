import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfileContainer from './UserProfileContainer';
import UserTrackContainer from './UserTrackContainer';
import './UserMain.scss';

const UserMain = () => {
  const { user } = useParams();
  return (
    <div className="user">
      <UserProfileContainer uid={user} />
      <UserTrackContainer uid={user} />
    </div>
  );
};

export default UserMain;
