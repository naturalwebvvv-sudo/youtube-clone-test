import React from 'react';
import { MdHistory } from 'react-icons/md';
import { useGlobalState } from '../context/GlobalStateContext';
import VideoCard from '../components/VideoCard';

const History = () => {
  const { history } = useGlobalState();

  return (
    <main className="main-content">
      <h2 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <MdHistory /> History
      </h2>
      
      {history.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60%', color: 'var(--text-dim)' }}>
          <MdHistory style={{ fontSize: '64px', marginBottom: '16px' }} />
          <h3>No watch history</h3>
          <p style={{ marginTop: '8px' }}>Videos you watch will show up here.</p>
        </div>
      ) : (
        <div className="video-grid">
          {history.map(video => (
            <VideoCard key={`history-${video.id}`} video={video} />
          ))}
        </div>
      )}
    </main>
  );
};

export default History;
