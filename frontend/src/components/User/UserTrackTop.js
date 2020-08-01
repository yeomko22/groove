import React, { useContext } from 'react';
import { FaPlayCircle as Play, FaPauseCircle as Pause } from 'react-icons/fa';
import { MusicContext } from '../../context/MusicContext';

const UserTrackTop = ({ trackInfo }) => {
  const { TrackUserName, TrackTitle } = trackInfo;
  const { musicDispatch } = useContext(MusicContext);

  return (
    <li className="usertrack__top">
      <Play
        className="usertrack__top__playbutton"
        onClick={() =>
          musicDispatch({ type: 'setMusic', musicInfo: trackInfo })
        }
      />
      <div>
        <h4 className="usertrack__top--username">{TrackUserName}</h4>
        <h3>{TrackTitle}</h3>
      </div>
    </li>
  );
};

export default UserTrackTop;
