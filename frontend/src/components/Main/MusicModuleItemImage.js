import React from 'react';
import default_thumbnail from '../../assets/music_default_thumbnail.jpg';

const MusicModuleItemImage = ({ artwork }) => {
  if (artwork === '') artwork = default_thumbnail;
  return (
    <img className="musicmodule__item__image" src={artwork} alt="artwork" />
  );
};

export default MusicModuleItemImage;
