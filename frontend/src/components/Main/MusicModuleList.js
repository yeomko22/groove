import React, { useState, useEffect } from 'react';
import MusicModule from './MusicModule';
import { SERVER_IP } from '../../const';
import axios from 'axios';

const MusicModuleList = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const loadTop100Tags = async () => {
      const res = await axios(`${SERVER_IP}/api/tracks/genres`);
      const { code, genres } = res.data;
      setTags(genres.map((track) => track.TrackGenre));
    };
    loadTop100Tags();
  }, []);

  if (tags.length === 0) return <div>로딩UI 추가하기📛</div>;
  return (
    <ul>
      {tags.map((tag) => (
        <MusicModule key={tag} tag={tag} />
      ))}
    </ul>
  );
};

export default MusicModuleList;
