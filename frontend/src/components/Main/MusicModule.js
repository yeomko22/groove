import React from 'react';
import MusicModuleTitle from './MusicModuleTitle';
import MusicModuleItemList from './MusicModuleItemList';
import './MusicModule.scss';

const MusicModule = ({ category, specificCategory }) => (
  <li className="musicmodule">
    <MusicModuleTitle
      category={specificCategory === '' ? category : specificCategory}
    />
    <MusicModuleItemList
      category={category}
      specificCategory={specificCategory}
    />
  </li>
);

export default MusicModule;
