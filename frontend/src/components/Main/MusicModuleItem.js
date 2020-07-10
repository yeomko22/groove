import React from 'react';
import MusicModuleItemImage from './MusicModuleItemImage';
import MusicModuleItemSpec from './MusicModuleItemSpec';

const MusicModuleItem = ({ musicObj }) => {
  const { TrackArtworkThumbnail, TrackTitle, TrackUserName } = musicObj;
  return (
    <li className="musicmodule__item">
      <MusicModuleItemImage trackThumbnail={TrackArtworkThumbnail} />
      <MusicModuleItemSpec
        trackTitle={TrackTitle}
        trackUsername={TrackUserName}
      />
    </li>
  );
};

export default MusicModuleItem;
