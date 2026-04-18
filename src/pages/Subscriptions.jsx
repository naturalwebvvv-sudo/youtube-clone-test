import React from 'react';
import { MdSubscriptions } from 'react-icons/md';

const Subscriptions = () => {
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
        <MdSubscriptions style={{ fontSize: '64px', marginBottom: '16px' }} />
        <h2>Subscriptions Page</h2>
        <p style={{ fontSize: '16px', marginTop: '16px' }}>Videos from channels you subscribe to.</p>
      </div>
    </main>
  );
};

export default Subscriptions;
