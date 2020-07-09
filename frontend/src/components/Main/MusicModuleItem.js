import React from 'react';
import MusicModuleItemImage from './MusicModuleItemImage';
import MusicModuleItemSpec from './MusicModuleItemSpec';

const MusicModuleItem = ({ tag, music }) => {
  return (
    <li className="musicmodule__item">
      <MusicModuleItemImage tag={tag} music={music} />
      <MusicModuleItemSpec music={music} />
    </li>
  );
};

export default MusicModuleItem;
