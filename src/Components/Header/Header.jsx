import React from 'react';
import './Header.css';
import { BsSearch } from 'react-icons/bs';

export const Header = () => {
  return (
    <>
      <div className="wrapper"></div>
      <div className="header">
        <div className="header-wrapper">
          <h1>What do you want to watch ?</h1>
          <div className='search'>
            <input placeholder="Search" />
            <BsSearch className="Search-icon" />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
