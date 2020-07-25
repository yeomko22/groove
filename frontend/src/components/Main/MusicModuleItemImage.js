import React from 'react';
import default_thumbnail from '../../assets/music_default_thumbnail.jpg';
import { Link } from 'react-router-dom';

const MusicModuleItemImage = ({ artwork, trackid, trackuserid }) => {
  if (artwork === '') artwork = default_thumbnail;
  return (
    <Link to={`/${trackuserid}/${trackid}`}>
      <img className="musicmodule__item__image" src={artwork} alt="artwork" />
    </Link>
  );
};

export default MusicModuleItemImage;
