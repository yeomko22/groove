import React, { useEffect, useState } from 'react';
import { SERVER_IP } from '../../utils/const';
import axios from 'axios';
import UserTrack from './UserTrack';

const UserTrackList = ({ uid }) => {
  const [tracks, setTracks] = useState([]);
  const [nextURL, setNextURL] = useState('');
  const initURL = `${SERVER_IP}/api/tracks/user/${uid}`;

  const getTracks = async () => {
    if (nextURL === '') return;
    const { data } = await axios(nextURL);
    const { tracks, next_url } = await data;
    setTracks(tracks);
    setNextURL(next_url);
  };

  useEffect(() => {
    if (initURL === nextURL) getTracks();
  }, [nextURL]);

  useEffect(() => {
    setNextURL(initURL);
  }, [uid]);

  if (tracks.length == 0) return <div>Track is empty.</div>;
  return (
    <ul>
      {tracks.map((track) => (
        <UserTrack key={track.ID} trackInfo={track} />
      ))}
    </ul>
  );
};

export default UserTrackList;
