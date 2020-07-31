import React, { useEffect, useState } from 'react';
import { SERVER_IP } from '../../utils/const';
import UserProfileImage from './UserProfileImage';
import UserProfileInfo from './UserProfileInfo';
import axios from 'axios';

const UserProfileContainer = ({ uid }) => {
  const [profileImage, setProfileImage] = useState('');
  const [profileBanner, setProfileBanner] = useState('');
  const [userInfo, setUserInfo] = useState(['', '']);

  useEffect(() => {
    const url = `${SERVER_IP}/api/users/${uid}`;
    const getUserInfo = async () => {
      const { data } = await axios(url);
      const { user } = await data;
      const {
        UserName,
        UserProfileOrg,
        UserBanner,
        UserDescription,
      } = await user;
      setProfileImage(UserProfileOrg);
      setProfileBanner(UserBanner);
      setUserInfo([UserName, UserDescription]);
    };
    getUserInfo();
  }, []);

  return (
    <div className="userprofile">
      <img className="userprofile__banner" src={profileBanner} />
      <div className="userprofile__container">
        <UserProfileImage imageURL={profileImage} />
        <UserProfileInfo userinfo={userInfo} />
      </div>
    </div>
  );
};

export default UserProfileContainer;
