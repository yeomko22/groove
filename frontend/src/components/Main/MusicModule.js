import React from 'react';
import MusicModuleTitle from './MusicModuleTitle';
import MusicModuleItemList from './MusicModuleItemList';
import './MusicModule.scss';

const MusicModule = ({ tag }) => {
  const loadData = {};
  return (
    <li className="musicmodule">
      <MusicModuleTitle tag={tag} />
      <MusicModuleItemList tag={tag} />
    </li>
  );
};

export default MusicModule;
