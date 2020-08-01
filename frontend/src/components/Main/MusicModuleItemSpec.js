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
        <div className="musicmodule__item__spec--title">{trackTitle}</div>
      </Link>
      <Link to={`/${trackuserid}`}>
        <div className="musicmodule__item__spec--username">{trackUsername}</div>
      </Link>
    </div>
  );
};

export default MusicModuleItemSpec;
