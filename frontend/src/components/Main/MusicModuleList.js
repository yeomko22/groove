import React from 'react';
import MusicModule from './MusicModule';
import { categoryList } from '../../const';

const MusicModuleList = () => {
  return (
    <ul>
      {categoryList.map((item) => {
        const [category, specificCategory] = item;
        return (
          <MusicModule
            key={`${category}_${specificCategory}`}
            category={category}
            specificCategory={specificCategory}
          />
        );
      })}
    </ul>
  );
};

export default MusicModuleList;
