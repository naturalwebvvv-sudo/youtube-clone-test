import React from 'react';
import { MdOutlineThumbUp } from 'react-icons/md';
import { useGlobalState } from '../context/GlobalStateContext';
import VideoCard from '../components/VideoCard';

const LikedVideos = () => {
  const { likedVideos } = useGlobalState();

  return (
    <main className="main-content">
      <h2 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <MdOutlineThumbUp /> Liked Videos
      </h2>
      
      {likedVideos.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60%', color: 'var(--text-dim)' }}>
          <MdOutlineThumbUp style={{ fontSize: '64px', marginBottom: '16px' }} />
          <h3>No liked videos</h3>
          <p style={{ marginTop: '8px' }}>Videos you have liked in the past.</p>
        </div>
      ) : (
        <div className="video-grid">
          {likedVideos.map(video => (
            <VideoCard key={`liked-${video.id}`} video={video} />
          ))}
        </div>
      )}
    </main>
  );
};

export default LikedVideos;
