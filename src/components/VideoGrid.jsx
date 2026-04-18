import React from 'react';
import VideoCard from './VideoCard';
import { MOCK_VIDEOS } from '../data/mockdata';

const categories = [
  "All", "Gaming", "Music", "Live", "Mixes", "News", "Programming", "Gadgets", "Cooking", "Recent", "Watched"
];

const VideoGrid = () => {
  return (
    <main className="main-content">
      <div className="categories">
        {categories.map((cat, index) => (
          <button 
            key={index} 
            className={`category-pill ${index === 0 ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="video-grid">
        {MOCK_VIDEOS.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </main>
  );
};

export default VideoGrid;
