import React from 'react';
import MusicModuleItemImage from './MusicModuleItemImage';
import MusicModuleItemSpec from './MusicModuleItemSpec';
import MusicModuleItemPlay from './MusicModuleItemPlay';
import { Link } from 'react-router-dom';

const MusicModuleItem = ({ musicObj }) => {
  const {
    TrackArtwork,
    TrackTitle,
    TrackUserName,
    TrackUserProfile,
    TrackId,
    TrackUserId,
  } = musicObj;
  return (
    <li className="musicmodule__item">
      {/* <Link to={`/${tag}/${music.name}`}> */}
      <MusicModuleItemImage
        artwork={TrackArtwork === '' ? TrackUserProfile : TrackArtwork}
        trackid={TrackId}
        trackuserid={TrackUserId}
      />
      {/* </Link> */}

      <MusicModuleItemPlay musicInfo={musicObj} />
      <MusicModuleItemSpec
        trackTitle={TrackTitle}
        trackUsername={TrackUserName}
      />
    </li>
  );
};

export default MusicModuleItem;
