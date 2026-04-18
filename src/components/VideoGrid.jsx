import React from 'react';
import VideoCard from './VideoCard';

const categories = [
  "All", "Gaming", "Music", "Live", "Mixes", "News", "Programming", "Gadgets", "Cooking", "Recent", "Watched"
];

const MOCK_VIDEOS = Array.from({ length: 16 }).map((_, i) => ({
  id: i,
  title: `Amazing Video Title That Spans Multiple Lines For Testing ${i + 1}`,
  thumbnail: `https://picsum.photos/seed/${i + 10}/640/360`,
  duration: `${Math.floor(Math.random() * 20) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
  channelName: `Creator ${i + 1}`,
  channelAvatar: `https://picsum.photos/seed/${i + 100}/48/48`,
  views: `${Math.floor(Math.random() * 900) + 10}K views`,
  timestamp: `${Math.floor(Math.random() * 11) + 1} months ago`
}));

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
