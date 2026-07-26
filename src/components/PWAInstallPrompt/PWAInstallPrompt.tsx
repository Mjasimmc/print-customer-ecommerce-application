import React, { useState } from 'react';
import { Button } from '@print-delivery/ui';
import styles from './PWAInstallPrompt.module.scss';

export const PWAInstallPrompt: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className={styles.promptBanner}>
      <div className={styles.content}>
        <div className={styles.icon}>LH</div>
        <div className={styles.textGroup}>
          <span className={styles.title}>Install LocalHub App</span>
          <span className={styles.desc}>Add to Home Screen for fast daily access</span>
        </div>
      </div>

      <div className={styles.actions}>
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            alert('LocalHub added to your Home Screen!');
            setDismissed(true);
          }}
        >
          Install
        </Button>
        <button className={styles.closeBtn} onClick={() => setDismissed(true)} title="Dismiss">
          ✕
        </button>
      </div>
    </div>
  );
};
