import React from 'react';
import { MdOutlineWatchLater } from 'react-icons/md';
import { useGlobalState } from '../context/GlobalStateContext';
import VideoCard from '../components/VideoCard';

const WatchLater = () => {
  const { watchLater } = useGlobalState();

  return (
    <main className="main-content">
      <h2 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <MdOutlineWatchLater /> Watch Later
      </h2>
      
      {watchLater.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60%', color: 'var(--text-dim)' }}>
          <MdOutlineWatchLater style={{ fontSize: '64px', marginBottom: '16px' }} />
          <h3>No videos saved</h3>
          <p style={{ marginTop: '8px' }}>Videos saved to watch later will show up here.</p>
        </div>
      ) : (
        <div className="video-grid">
          {watchLater.map(video => (
            <VideoCard key={`watchlater-${video.id}`} video={video} />
          ))}
        </div>
      )}
    </main>
  );
};

export default WatchLater;
