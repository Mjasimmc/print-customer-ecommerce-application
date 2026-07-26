'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../src/ui';
import { MOCK_USER_PROFILE } from '../../src/mock/userProfile';
import styles from '../../src/pages/Profile/ProfilePage.module.scss';

export default function ProfilePage() {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    setIsDark(theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    setIsDark(!isDark);
  };

  return (
    <div className={styles.container}>
      {/* Profile Card */}
      <div className={styles.profileHero}>
        <img src={MOCK_USER_PROFILE.avatar} alt={MOCK_USER_PROFILE.name} className={styles.avatar} />
        <div>
          <div className={styles.userName}>
            {MOCK_USER_PROFILE.name}
          </div>
          <div className={styles.userContact}>
            {MOCK_USER_PROFILE.email} • {MOCK_USER_PROFILE.phone}
          </div>
          <div className={styles.tierBadge}>
            {MOCK_USER_PROFILE.memberTier} Member
          </div>
        </div>
      </div>

      {/* Digital Wallet Card */}
      <div className={styles.walletCard}>
        <div>
          <div className={styles.walletTitle}>
            LocalHub Credit Wallet
          </div>
          <div className={styles.walletBalance}>
            ${MOCK_USER_PROFILE.walletBalance.toFixed(2)}
          </div>
          <div className={styles.walletPoints}>
            ✦ {MOCK_USER_PROFILE.rewardPoints} Pro Manufacturing Points
          </div>
        </div>

        <button
          className={styles.addFundsBtn}
          onClick={() => alert('Credit added to LocalHub wallet balance.')}
        >
          + Add Funds
        </button>
      </div>

      {/* Account & Manufacturing Settings Menu */}
      <div>
        <h3 className={styles.sectionHeader}>
          Account Workspace & Preferences
        </h3>

        <div className={styles.menuList}>
          <div className={styles.menuItem} onClick={toggleTheme}>
            <span>🌗 Operating Theme Mode</span>
            <span className={styles.itemStatusPrimary}>
              {isDark ? 'Dark Mode Active 🌙' : 'Light Mode Active ☀️'}
            </span>
          </div>

          <div className={styles.menuItem} onClick={() => alert('Delivery Addresses Managed: 2 Saved Locations')}>
            <span>📍 Delivery Address Wallet</span>
            <span className={styles.itemStatusMuted}>2 Saved Locations ➔</span>
          </div>

          <div className={styles.menuItem} onClick={() => alert('Manufacturing Preset: 300 DPI, CMYK, Standard Bleed')}>
            <span>⚙️ Default Manufacturing Specs</span>
            <span className={styles.itemStatusMuted}>300 DPI / CMYK ➔</span>
          </div>

          <div className={styles.menuItem} onClick={() => router.push('/pricing')}>
            <span>💎 LocalHub Pro & ROI Calculator</span>
            <span className={styles.itemStatusPrimary}>View Plans ➔</span>
          </div>

          <div className={styles.menuItem} onClick={() => alert('Support Ticket #8291 Open. Specialist assigned.')}>
            <span>💬 Priority Studio Support</span>
            <span className={styles.itemStatusSuccess}>Online ➔</span>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="md"
        className={styles.logoutBtn}
        onClick={() => alert('Logged out safely.')}
      >
        Log Out of LocalHub OS 🚪
      </Button>
    </div>
  );
}
