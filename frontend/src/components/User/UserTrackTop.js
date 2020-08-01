import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaPlayCircle as Play, FaPauseCircle as Pause } from 'react-icons/fa';
import { MusicContext } from '../../context/MusicContext';

const UserTrackTop = ({ trackInfo }) => {
  const { TrackUserName, TrackTitle, TrackId } = trackInfo;
  const { musicDispatch } = useContext(MusicContext);
  const { pathname } = useLocation();

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
        <Link to={`${pathname}/${TrackId}`}>
          <h3 className="link">{TrackTitle}</h3>
        </Link>
      </div>
    </li>
  );
};

export default UserTrackTop;
