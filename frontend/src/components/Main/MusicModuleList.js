import React from 'react';
import MusicModule from './MusicModule';

const MusicModuleList = () => {
  const tags = ['set1', 'set2', 'set3', 'set4'];
  return (
    <ul>
      {tags.map((tag) => (
        <MusicModule key={tag} tag={tag} />
      ))}
    </ul>
  );
};

export default MusicModuleList;
