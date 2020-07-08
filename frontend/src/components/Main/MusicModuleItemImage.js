import React from 'react';

const MusicModuleItemImage = ({ tag, music }) => {
  const imageURL = `https://robohash.org/${music.name}?set=${tag}`;
  return <img className="musicmodule__item__image" src={imageURL} />;
};

export default MusicModuleItemImage;
