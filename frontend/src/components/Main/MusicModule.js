import React from 'react';
import MusicModuleTitle from './MusicModuleTitle';
import MusicModuleItemList from './MusicModuleItemList';
import './MusicModule.scss';

const MusicModule = ({ category, specificCategory, title }) => (
  <li className="musicmodule">
    <MusicModuleTitle title={title} />
    <MusicModuleItemList
      category={category}
      specificCategory={specificCategory}
    />
  </li>
);

export default MusicModule;
