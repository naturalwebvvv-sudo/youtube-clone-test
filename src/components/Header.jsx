import React from 'react';
import { FiMenu, FiSearch, FiMic } from 'react-icons/fi';
import { MdVideoCall, MdNotifications } from 'react-icons/md';
import { FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-icon">
          <FiMenu />
        </button>
        <div className="logo" style={{ cursor: 'pointer' }}>
          <FaYoutube className="logo-icon" />
          YouTube
        </div>
      </div>
      
      <div className="header-center">
        <div className="search-box">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-btn">
            <FiSearch />
          </button>
        </div>
        <button className="mic-btn">
          <FiMic />
        </button>
      </div>
      
      <div className="header-right">
        <button className="header-icon">
          <MdVideoCall />
        </button>
        <button className="header-icon">
          <MdNotifications />
        </button>
        <img 
          src="https://picsum.photos/id/64/32/32" 
          alt="User avatar" 
          className="avatar" 
        />
      </div>
    </header>
  );
};

export default Header;
