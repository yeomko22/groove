import React from 'react';
import default_thumbnail from '../../assets/music_default_thumbnail.jpg';

const MusicModuleItemImage = ({ trackThumbnail }) => {
  if (trackThumbnail === '') trackThumbnail = default_thumbnail;
  return <img className="musicmodule__item__image" src={trackThumbnail} />;
};

export default MusicModuleItemImage;
