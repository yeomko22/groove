import React, { useContext } from 'react';
import UserTrackImage from './UserTrackImage';
import { FaPlayCircle as Play, FaHeart as Liked } from 'react-icons/fa';
import WaveFormMain from '../WaveForm/WaveFormMain';
import { MusicContext } from '../../context/MusicContext';

const UserTrack = ({ trackInfo }) => {
  const {
    TrackArtwork,
    TrackUserName,
    TrackTitle,
    TrackLikesCount,
    TrackPlaybackCount,
    TrackId,
    TrackDuration,
  } = trackInfo;
  const { musicDispatch } = useContext(MusicContext);

  return (
    <li className="usertrack">
      <div className="usertrack__container__left">
        <UserTrackImage imageURL={TrackArtwork} />
      </div>
      <ul className="usertrack__container__right">
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

        <li className="usertrack__middle">
          <WaveFormMain trackid={TrackId} duration={TrackDuration} />
        </li>

        <li className="usertrack__bottom">
          <span className="usertrack__bottom--liked">
            <Liked className="usertrack__bottom--liked--icon" />
            {`${TrackLikesCount} Liked`}
          </span>
          <span className="usertrack__bottom--liked">
            {`This song is playbacked ${TrackPlaybackCount} times.`}
          </span>
        </li>
      </ul>
    </li>
  );
};

export default UserTrack;
