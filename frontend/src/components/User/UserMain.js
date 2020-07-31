import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfileContainer from './UserProfileContainer';
import UserTrackList from './UserTrackList';
import './UserMain.scss';

const UserMain = () => {
  const { user } = useParams();
  return (
    <section className="user">
      <UserProfileContainer uid={user} />
      <UserTrackList uid={user} />
    </section>
  );
};

export default UserMain;
