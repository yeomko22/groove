import React from 'react';
import TrackBoardCommentList from './TrackBoardCommentList';
import TrackBoardLyrics from './TrackBoardLyrics';

const TrackBoard = ({ trackid, description }) => {
  return (
    <div>
      <TrackBoardLyrics description={description} />
      <TrackBoardCommentList trackid={trackid} />
    </div>
  );
};

export default TrackBoard;
