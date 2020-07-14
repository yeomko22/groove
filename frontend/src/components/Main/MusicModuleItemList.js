import React, { useState, useEffect } from 'react';
import MusicModuleItem from './MusicModuleItem';
import { SERVER_IP } from '../../utils/const';
import axios from 'axios';

const MusicModuleItemList = ({ category, specificCategory }) => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const loadMusics = async () => {
      const res = await axios(
        `${SERVER_IP}/api/tracks/${category}/${specificCategory}`,
      );
      const { tracks } = res.data;
      setMusics(tracks);
    };
    loadMusics();
  }, [category, specificCategory]);

  if (musics.length === 0)
    return <div className="musicmodule__loading">Loading ... </div>;
  return (
    <ul className="musicmodule__itemlist">
      {musics.map((music) => (
        <MusicModuleItem key={music.TrackId} musicObj={music} />
      ))}
    </ul>
  );
};

export default MusicModuleItemList;
