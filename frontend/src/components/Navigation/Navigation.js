import React from 'react';
import Search from './Search';
import Upload from './Upload';
import Profile from './Profile';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <h1 className="nav__title">Groove</h1>
        <Search />
        <Upload />
        <Profile />
      </nav>
    </div>
  );
};

export default Navigation;
