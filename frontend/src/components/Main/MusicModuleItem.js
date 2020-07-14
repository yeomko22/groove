import React from 'react';
import MusicModuleItemImage from './MusicModuleItemImage';
import MusicModuleItemSpec from './MusicModuleItemSpec';
import MusicModuleItemPlay from './MusicModuleItemPlay';

const MusicModuleItem = ({ musicObj }) => {
  const {
    TrackArtwork,
    TrackTitle,
    TrackUserName,
    TrackUserProfile,
  } = musicObj;
  return (
    <li className="musicmodule__item">
      <MusicModuleItemImage
        artwork={TrackArtwork === '' ? TrackUserProfile : TrackArtwork}
      />
      <MusicModuleItemPlay musicInfo={musicObj} />
      <MusicModuleItemSpec
        trackTitle={TrackTitle}
        trackUsername={TrackUserName}
      />
    </li>
  );
};

export default MusicModuleItem;
