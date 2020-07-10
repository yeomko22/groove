import React, { useState, useEffect } from 'react';
import MusicModuleItem from './MusicModuleItem';
import axios from 'axios';

const MusicModuleItemList = ({ tag }) => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const loadMusics = async () => {
      const nameURL = `http://34.64.252.200/api/tracks/genre/${tag}`;
      const res = await axios(nameURL);
      setMusics(res.data);
    };
    loadMusics();
  }, []);

  if (musics.length == 0) return <div>없음</div>;
  return (
    <ul className="musicmodule__itemlist">
      {musics.map((music) => (
        <MusicModuleItem key={music.TrackId} musicObj={music} />
      ))}
    </ul>
  );
};

export default MusicModuleItemList;
