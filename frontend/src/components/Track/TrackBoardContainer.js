import React from 'react';
import TrackBoardUserInfo from './TrackBoardUserInfo';
import TrackBoard from './TrackBoard';

const TrackBoardContainer = ({ track }) => {
  const { TrackUserProfile, TrackUserName, TrackId, TrackDescription } = track;
  console.log({ track });
  return (
    <article className="trackboard">
      <TrackBoardUserInfo
        userProfileImage={TrackUserProfile}
        username={TrackUserName}
      />
      <TrackBoard trackid={TrackId} description={TrackDescription} />
    </article>
  );
};

export default TrackBoardContainer;
