import React from 'react';

const TrackBoardLyrics = ({ description }) => {
  return (
    <>
      <h3>Description</h3>
      <p className="trackboard__board__description">{description}</p>
    </>
  );
};

export default TrackBoardLyrics;
