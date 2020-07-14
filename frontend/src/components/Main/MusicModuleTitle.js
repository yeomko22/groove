import React from 'react';

const MusicModuleTitle = ({ category }) => {
  return <h2 className="musicmodule__title">{`# ${category}`}</h2>;
};

export default MusicModuleTitle;
