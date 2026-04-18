import React from 'react';
import { SiYoutubeshorts } from 'react-icons/si';

const Shorts = () => {
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
        <SiYoutubeshorts style={{ fontSize: '64px', color: 'var(--red-accent)', marginBottom: '16px' }} />
        <h2>Shorts Page</h2>
        <p style={{ fontSize: '16px', marginTop: '16px' }}>Vertical video feed will go here.</p>
      </div>
    </main>
  );
};

export default Shorts;
