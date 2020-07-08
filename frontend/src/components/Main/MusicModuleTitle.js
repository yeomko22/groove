import React from 'react';

const MusicModuleTitle = ({ tag }) => {
  return (
    <h2 className="musicmodule__title">{`More of what you like: ${tag}`}</h2>
  );
};

export default MusicModuleTitle;
