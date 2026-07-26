import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@print-delivery/ui';
import { BottomNav } from '../../components/Navigation/BottomNav';
import { MOCK_USER_PROFILE } from '../../mock/userProfile';
import styles from './ProfilePage.module.scss';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const user = MOCK_USER_PROFILE;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.profileHero}>
          <img src={user.avatarUrl} alt={user.fullName} className={styles.avatar} />
          <div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{user.fullName}</h2>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{user.email}</div>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, background: '#fef3c7', color: '#92400e', padding: '2px 8px', borderRadius: '9999px', marginTop: '4px', display: 'inline-block' }}>
              🌟 {user.vipTier}
            </span>
          </div>
        </div>

        {/* Service Wallet Card */}
        <div className={styles.walletCard}>
          <div>
            <div style={{ fontSize: '0.75rem', opacity: 0.8, textTransform: 'uppercase' }}>Service Wallet Balance</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>${user.walletBalance.toFixed(2)}</div>
          </div>
          <Button variant="outline" size="sm" style={{ borderColor: '#ffffff', color: '#ffffff' }} onClick={() => navigate('/pricing')}>
            + Upgrade / Add Funds
          </Button>
        </div>

        {/* Quick Links Menu */}
        <div className={styles.menuList}>
          <div className={styles.menuItem} onClick={() => navigate('/pricing')}>
            <span>🌟 Local Pro Pass & Membership Plans</span>
            <span>➔</span>
          </div>
          <div className={styles.menuItem} onClick={() => navigate('/orders')}>
            <span>📦 Order History & Reorder</span>
            <span>➔</span>
          </div>
          <div className={styles.menuItem}>
            <span>📍 Saved Addresses ({user.addresses.length})</span>
            <span>➔</span>
          </div>
          <div className={styles.menuItem}>
            <span>💳 Payment Methods ({user.savedPaymentCards.length})</span>
            <span>➔</span>
          </div>
          <div className={styles.menuItem}>
            <span>📁 Saved Project Files & Specs ({user.savedFilesCount})</span>
            <span>➔</span>
          </div>
          <div className={styles.menuItem} onClick={toggleDarkMode}>
            <span>🌙 Dark Mode Theme</span>
            <span>{darkMode ? 'ON' : 'OFF'}</span>
          </div>
          <div className={styles.menuItem}>
            <span>❓ Support Center & Help</span>
            <span>➔</span>
          </div>
        </div>

        <Button variant="danger" size="md" style={{ marginTop: '0.5rem' }} onClick={() => alert('Logged out')}>
          Log Out
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};
