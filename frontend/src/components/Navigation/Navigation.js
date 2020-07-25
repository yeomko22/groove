import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Upload from './Upload';
import Profile from './Profile';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <Link to="/">
          <h1 className="nav__title">Groove</h1>
        </Link>
        <Search />
        {/* <Upload />
        <Profile /> */}
      </nav>
    </div>
  );
};

export default Navigation;
