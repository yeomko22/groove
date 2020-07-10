import React from 'react';

const MusicModuleItemSpec = ({ trackTitle, trackUsername }) => {
  return (
    <div className="musicmodule__item__spec">
      <div>{trackTitle}</div>
      <div className="musicmodule__item__spec--description">
        {trackUsername}
      </div>
    </div>
  );
};

export default MusicModuleItemSpec;
