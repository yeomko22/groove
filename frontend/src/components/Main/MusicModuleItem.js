import React from 'react';
import MusicModuleItemImage from './MusicModuleItemImage';
import MusicModuleItemSpec from './MusicModuleItemSpec';
import { Link } from 'react-router-dom';

const MusicModuleItem = ({ tag, music }) => {
  return (
    <li className="musicmodule__item">
      <Link to={`/${tag}/${music.name}`}>
        <MusicModuleItemImage tag={tag} music={music} />
        <MusicModuleItemSpec music={music} />
      </Link>
    </li>
  );
};

export default MusicModuleItem;
