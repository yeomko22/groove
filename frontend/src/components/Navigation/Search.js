import React from 'react';
import { FaSearch as SearchIcon } from 'react-icons/fa';

const Search = () => {
  const handleClick = () => {
    alert('👷‍♀️👷‍♂️ 검색 기능은 구현중입니다. 🛠⚙🧱');
  };
  return (
    <div className="nav__search">
      <input />
      <SearchIcon className="nav__search__icon" onClick={handleClick} />
    </div>
  );
};

export default Search;
