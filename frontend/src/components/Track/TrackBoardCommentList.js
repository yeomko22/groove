import React, { useEffect, useState } from 'react';
import { SERVER_IP } from '../../utils/const';
import axios from 'axios';
import TrackBoardComment from './TrackBoardComment';

const TrackBoardCommentList = ({ trackid }) => {
  const [commentList, setComments] = useState([]);
  const [nextURL, setNextURL] = useState('');
  const initURL = `${SERVER_IP}/api/comments/${trackid}`;

  const getComments = async () => {
    if (nextURL === '') return;
    const { data } = await axios(nextURL);
    const { comments, next_url } = await data;
    setComments([...commentList, ...comments]);
    setNextURL(next_url === '' ? '' : `${SERVER_IP}/api${next_url}`);
  };

  useEffect(() => {
    setNextURL(() => initURL);
  }, [trackid]);

  useEffect(() => {
    if (nextURL === initURL) getComments();
  }, [nextURL]);

  return (
    <>
      <h3>Comments</h3>
      <ul>
        {commentList.map((comment, idx) => (
          <TrackBoardComment
            key={`${comment.created_at}${idx}`}
            comment={comment}
          />
        ))}
      </ul>
      {nextURL && (
        <button
          onClick={getComments}
          className="trackboard__board__comment--commentbutton"
        >
          show more comments ▼
        </button>
      )}
    </>
  );
};

export default TrackBoardCommentList;
