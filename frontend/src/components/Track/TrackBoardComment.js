import React, { useEffect } from 'react';

const TrackBoardComment = ({ comment }) => {
  const {
    created_at,
    comment_body,
    comment_uploader_id,
    comment_uploader_profile,
  } = comment;
  const defaultProfile =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

  return (
    <div className="trackboard__board__comment">
      <img
        src={
          comment_uploader_profile === ''
            ? defaultProfile
            : comment_uploader_profile
        }
        className="trackboard__board__comment--image"
      />
      <div className="trackboard__board__comment--body">
        <div>{comment_uploader_id}</div>
        <div>{comment_body}</div>
      </div>
      <div className="trackboard__board__comment--created">{created_at}</div>
    </div>
  );
};

export default TrackBoardComment;
