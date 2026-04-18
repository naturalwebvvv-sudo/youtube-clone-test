import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { IoAddCircleOutline } from 'react-icons/io5';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => isActive ? "bottom-nav-item active" : "bottom-nav-item"}>
        <MdHome className="bottom-nav-icon" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/shorts" className={({ isActive }) => isActive ? "bottom-nav-item active" : "bottom-nav-item"}>
        <SiYoutubeshorts className="bottom-nav-icon" />
        <span>Shorts</span>
      </NavLink>
      <div className="bottom-nav-item">
        <IoAddCircleOutline className="bottom-nav-icon large-icon" />
      </div>
      <NavLink to="/subscriptions" className={({ isActive }) => isActive ? "bottom-nav-item active" : "bottom-nav-item"}>
        <MdOutlineSubscriptions className="bottom-nav-icon" />
        <span>Subscriptions</span>
      </NavLink>
      <NavLink to="/library" className={({ isActive }) => isActive ? "bottom-nav-item active" : "bottom-nav-item"}>
        <MdOutlineVideoLibrary className="bottom-nav-icon" />
        <span>You</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
