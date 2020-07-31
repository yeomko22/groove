import React from 'react';
import { Link } from 'react-router-dom';

const MusicModuleItemSpec = ({
  trackTitle,
  trackUsername,
  trackid,
  trackuserid,
}) => {
  return (
    <div className="musicmodule__item__spec">
      <Link to={`/${trackuserid}/${trackid}`}>
        <div>{trackTitle}</div>
      </Link>
      <Link to={`/${trackuserid}`}>
        <div className="musicmodule__item__spec--description">
          {trackUsername}
        </div>
      </Link>
    </div>
  );
};

export default MusicModuleItemSpec;
