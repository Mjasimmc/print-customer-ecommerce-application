'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BottomNav } from '../../src/components/Navigation/BottomNav';
import { MOCK_NOTIFICATIONS } from '../../src/mock/notifications';
import styles from '../../src/pages/Notifications/NotificationsPage.module.scss';

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>Notifications</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {MOCK_NOTIFICATIONS.map((n) => (
            <div
              key={n.id}
              className={`${styles.notifCard} ${!n.read ? styles.unread : ''}`}
              onClick={() => n.orderId && router.push(`/tracking/${n.orderId}`)}
              style={{ cursor: n.orderId ? 'pointer' : 'default' }}
            >
              <div className={styles.iconCircle}>
                {n.type === 'production' && '🛠️'}
                {n.type === 'delivery' && '📦'}
                {n.type === 'promo' && '🏷️'}
                {n.type === 'system' && '🔔'}
              </div>

              <div className={styles.details}>
                <span className={styles.title}>{n.title}</span>
                <p className={styles.body}>{n.body}</p>
                <span className={styles.time}>{n.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
