import React from 'react';

const AccountImage = () => {
  const imageURL =
    'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg';
  return <img className="profile__image" src={imageURL} alt="profile"></img>;
};

export default AccountImage;
