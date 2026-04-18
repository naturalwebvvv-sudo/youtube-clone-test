import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiSearch, FiMic } from 'react-icons/fi';
import { MdVideoCall, MdNotifications, MdOutlineSmartDisplay } from 'react-icons/md';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-icon">
          <FiMenu />
        </button>
        <Link to="/" className="logo" style={{ cursor: 'pointer', color: 'var(--text-color)', textDecoration: 'none' }}>
          <MdOutlineSmartDisplay className="logo-icon" style={{ color: 'var(--red-accent)' }} />
          VideoApp
        </Link>
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
        <button className="header-icon search-mobile-btn">
          <FiSearch />
        </button>
        <button className="header-icon responsive-hide">
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
