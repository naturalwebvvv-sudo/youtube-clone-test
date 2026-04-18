import React from 'react';
import { MdSettings, MdOutlineHelpOutline, MdFeedback } from 'react-icons/md';

const Account = () => {
  return (
    <main className="main-content">
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <img src="https://picsum.photos/id/64/120/120" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} alt="User avatar" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Sho's Account</h1>
            <span style={{ color: 'var(--text-dim)', fontSize: '14px' }}>sho@example.com</span>
            <span style={{ color: 'var(--accent-color)', fontSize: '14px', cursor: 'pointer', marginTop: '4px' }}>Manage your account settings</span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Settings & Help</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="account-action-row">
              <MdSettings style={{ fontSize: '24px' }} />
              <span style={{ fontSize: '16px' }}>Settings</span>
            </div>
            <div className="account-action-row">
              <MdOutlineHelpOutline style={{ fontSize: '24px' }} />
              <span style={{ fontSize: '16px' }}>Help & Support</span>
            </div>
            <div className="account-action-row">
              <MdFeedback style={{ fontSize: '24px' }} />
              <span style={{ fontSize: '16px' }}>Send Feedback</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Account;
