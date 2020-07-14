import React from 'react';
import MusicModule from './MusicModule';
import { categoryObject } from '../../const';

const MusicModuleList = () => {
  const getCategory = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return categoryObject['morning'];
    else if (hour >= 12 && hour < 22) return categoryObject['afternoon'];
    else if (hour >= 22 && hour < 1) return categoryObject['night'];
    else return categoryObject['dawn'];
  };
  return (
    <ul>
      {getCategory().map((item) => {
        const [category, specificCategory, title] = item;
        return (
          <MusicModule
            key={`${category}_${specificCategory}`}
            category={category}
            specificCategory={specificCategory}
            title={title}
          />
        );
      })}
    </ul>
  );
};

export default MusicModuleList;
