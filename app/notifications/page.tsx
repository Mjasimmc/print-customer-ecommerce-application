'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_NOTIFICATIONS } from '../../src/mock/notifications';
import styles from '../../src/pages/Notifications/NotificationsPage.module.scss';

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.header}>Real-Time Telemetry & Alerts</h1>
        <button
          className={styles.markReadBtn}
          onClick={() => alert('All notifications marked as read.')}
        >
          Mark All Read ✓
        </button>
      </div>

      <div className={styles.notifList}>
        {MOCK_NOTIFICATIONS.map((notif) => (
          <div
            key={notif.id}
            className={`${styles.notifCard} ${!notif.read ? styles.unread : ''}`}
            onClick={() => {
              if (notif.link) router.push(notif.link);
            }}
          >
            <div className={styles.iconCircle}>
              {notif.type === 'order' ? '⚙️' : notif.type === 'delivery' ? '🚴' : '💡'}
            </div>

            <div className={styles.details}>
              <div className={styles.title}>{notif.title}</div>
              <div className={styles.body}>{notif.body}</div>
              <div className={styles.time}>{notif.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
