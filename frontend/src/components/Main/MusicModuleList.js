import React, { useState, useEffect } from 'react';
import MusicModule from './MusicModule';
import axios from 'axios';

const MusicModuleList = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const loadTop100Tags = async () => {
      const res = await axios(`http://34.64.252.200/api/tracks/genres`);
      setTags(res.data.map((track) => track.TrackGenre));
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
