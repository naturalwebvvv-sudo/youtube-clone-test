import React from 'react';
import { MdHistory } from 'react-icons/md';

const History = () => {
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
        <MdHistory style={{ fontSize: '64px', marginBottom: '16px' }} />
        <h2>History Page</h2>
        <p style={{ fontSize: '16px', marginTop: '16px' }}>Your watch history.</p>
      </div>
    </main>
  );
};

export default History;
