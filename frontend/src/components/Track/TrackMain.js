import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SERVER_IP } from '../../utils/const';
import axios from 'axios';
import TrackPlayerContainer from './TrackPlayerContainer';
import './TrackMain.scss';

const TrackMain = () => {
  const { trackID } = useParams();
  const [track, setTrack] = useState({});

  useEffect(() => {
    const trackURL = `${SERVER_IP}/api/tracks/id/${trackID}`;
    const getTrackInfo = async () => {
      const { data } = await axios(trackURL);
      const { track } = await data;
      setTrack(track);
    };
    getTrackInfo();
  }, []);

  return (
    <section className="track">
      <TrackPlayerContainer track={track} />
    </section>
  );
};

export default TrackMain;
