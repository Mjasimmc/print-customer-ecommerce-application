'use client';

import React from 'react';
import { TopHeader } from '../Navigation/TopHeader';
import { BottomNav } from '../Navigation/BottomNav';
import { PWAInstallPrompt } from '../PWAInstallPrompt/PWAInstallPrompt';
import styles from './AppShell.module.scss';

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.appShell}>
      <TopHeader />

      <main className={styles.contentScroller}>
        {children}
      </main>

      <BottomNav />
      <PWAInstallPrompt />
    </div>
  );
};
