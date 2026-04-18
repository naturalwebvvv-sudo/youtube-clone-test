import React from 'react';
import { MdHome, MdOutlineExplore, MdSubscriptions, MdOutlineVideoLibrary, MdHistory, MdOutlineWatchLater, MdOutlineThumbUp } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="nav-section">
        <div className="nav-item active">
          <MdHome className="nav-icon" />
          <span className="nav-title">Home</span>
        </div>
        <div className="nav-item">
          <SiYoutubeshorts className="nav-icon" />
          <span className="nav-title">Shorts</span>
        </div>
        <div className="nav-item">
          <MdSubscriptions className="nav-icon" />
          <span className="nav-title">Subscriptions</span>
        </div>
      </div>

      <div className="nav-section">
        <div className="nav-item">
          <MdOutlineVideoLibrary className="nav-icon" />
          <span className="nav-title">Library</span>
        </div>
        <div className="nav-item">
          <MdHistory className="nav-icon" />
          <span className="nav-title">History</span>
        </div>
        <div className="nav-item">
          <MdOutlineWatchLater className="nav-icon" />
          <span className="nav-title">Watch later</span>
        </div>
        <div className="nav-item">
          <MdOutlineThumbUp className="nav-icon" />
          <span className="nav-title">Liked videos</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
