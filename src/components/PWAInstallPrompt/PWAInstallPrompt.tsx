'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../../ui';
import styles from './PWAInstallPrompt.module.scss';

export const PWAInstallPrompt: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    // Show PWA prompt simulation or check if installed
    const isDismissed = localStorage.getItem('pwa_dismissed');
    if (!isDismissed) {
      setCanInstall(true);
    }
  }, []);

  const handleInstall = () => {
    alert('LocalHub Product OS added to your Home Screen / Applications!');
    setDismissed(true);
    localStorage.setItem('pwa_dismissed', 'true');
  };

  const handleClose = () => {
    setDismissed(true);
    localStorage.setItem('pwa_dismissed', 'true');
  };

  if (dismissed || !canInstall) return null;

  return (
    <div className={styles.promptBanner}>
      <div className={styles.content}>
        <div className={styles.icon}>❖</div>
        <div className={styles.textGroup}>
          <span className={styles.title}>Install LocalHub Product OS</span>
          <span className={styles.desc}>Install as native application for instant offline access & push telemetry</span>
        </div>
      </div>

      <div className={styles.actions}>
        <Button variant="primary" size="sm" onClick={handleInstall}>
          Install App
        </Button>
        <button className={styles.closeBtn} onClick={handleClose} title="Dismiss">
          ✕
        </button>
      </div>
    </div>
  );
};
