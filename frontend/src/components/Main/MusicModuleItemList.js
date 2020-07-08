import React, { useState, useEffect } from 'react';
import MusicModuleItem from './MusicModuleItem';

const MusicModuleItemList = ({ tag }) => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    (async () => {
      const nameURL = `https://jsonplaceholder.typicode.com/users`;
      const res = await fetch(nameURL);
      const data = await res.json();
      setMusics(data);
    })();
  }, []);

  if (musics.length == 0) return <div>없음</div>;
  return (
    <ul className="musicmodule__itemlist">
      {musics.map((music) => (
        <MusicModuleItem key={music.name} tag={tag} music={music} />
      ))}
    </ul>
  );
};

export default MusicModuleItemList;
