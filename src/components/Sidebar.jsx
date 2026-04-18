import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome, MdOutlineExplore, MdSubscriptions, MdOutlineVideoLibrary, MdHistory, MdOutlineWatchLater, MdOutlineThumbUp } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';

const Sidebar = ({ expanded }) => {
  const sidebarClass = expanded ? "sidebar" : "sidebar mini";

  return (
    <aside className={sidebarClass}>
      <div className="nav-section">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <MdHome className="nav-icon" />
          <span className="nav-title">Home</span>
        </NavLink>
        <NavLink to="/shorts" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <SiYoutubeshorts className="nav-icon" />
          <span className="nav-title">Shorts</span>
        </NavLink>
        <NavLink to="/subscriptions" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <MdSubscriptions className="nav-icon" />
          <span className="nav-title">Subscriptions</span>
        </NavLink>
      </div>

      <div className="nav-section">
        <NavLink to="/library" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <MdOutlineVideoLibrary className="nav-icon" />
          <span className="nav-title">Library</span>
        </NavLink>
        <NavLink to="/history" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <MdHistory className="nav-icon" />
          <span className="nav-title">History</span>
        </NavLink>
        <NavLink to="/watch-later" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <MdOutlineWatchLater className="nav-icon" />
          <span className="nav-title">Watch later</span>
        </NavLink>
        <NavLink to="/liked-videos" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <MdOutlineThumbUp className="nav-icon" />
          <span className="nav-title">Liked videos</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
