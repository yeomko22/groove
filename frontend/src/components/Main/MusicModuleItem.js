import React from 'react';
import MusicModuleItemImage from './MusicModuleItemImage';
import MusicModuleItemSpec from './MusicModuleItemSpec';
import MusicModuleItemPlay from './MusicModuleItemPlay';

const MusicModuleItem = ({ musicObj }) => {
  const { TrackArtworkThumbnail, TrackTitle, TrackUserName } = musicObj;
  return (
    <li className="musicmodule__item">
      <MusicModuleItemImage trackThumbnail={TrackArtworkThumbnail} />
      <MusicModuleItemPlay musicInfo={musicObj} />
      <MusicModuleItemSpec
        trackTitle={TrackTitle}
        trackUsername={TrackUserName}
      />
    </li>
  );
};

export default MusicModuleItem;
