import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiSearch, FiMic } from 'react-icons/fi';
import { MdVideoCall, MdNotifications, MdOutlineSmartDisplay } from 'react-icons/md';

const Header = ({ toggleSidebar }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-icon" onClick={toggleSidebar}>
          <FiMenu />
        </button>
        <Link to="/" className="logo" style={{ cursor: 'pointer', color: 'var(--text-color)', textDecoration: 'none' }}>
          <MdOutlineSmartDisplay className="logo-icon" style={{ color: 'var(--red-accent)' }} />
          VideoApp
        </Link>
      </div>
      
      <div className="header-center">
        <form className="search-box" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <FiSearch />
          </button>
        </form>
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
        <Link to="/account" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://picsum.photos/id/64/32/32" 
            alt="User avatar" 
            className="avatar" 
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
