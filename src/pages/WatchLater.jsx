import React from 'react';
import { MdOutlineWatchLater } from 'react-icons/md';

const WatchLater = () => {
  return (
    <main className="main-content">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: 'var(--text-dim)',
      }}>
        <MdOutlineWatchLater style={{ fontSize: '64px', marginBottom: '16px' }} />
        <h2>Watch Later Page</h2>
        <p style={{ fontSize: '16px', marginTop: '16px' }}>Videos saved to watch later.</p>
      </div>
    </main>
  );
};

export default WatchLater;
