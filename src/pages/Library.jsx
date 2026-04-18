import React from 'react';
import { MdOutlineVideoLibrary } from 'react-icons/md';

const Library = () => {
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
        <MdOutlineVideoLibrary style={{ fontSize: '64px', marginBottom: '16px' }} />
        <h2>Library Page</h2>
        <p style={{ fontSize: '16px', marginTop: '16px' }}>Your video library, playlists, and more.</p>
      </div>
    </main>
  );
};

export default Library;
