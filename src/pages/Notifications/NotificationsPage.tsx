import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../../components/Navigation/BottomNav';
import { MOCK_NOTIFICATIONS } from '../../mock/notifications';
import styles from './NotificationsPage.module.scss';

export const NotificationsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>Notifications</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {MOCK_NOTIFICATIONS.map((n) => (
            <div
              key={n.id}
              className={`${styles.notifCard} ${!n.read ? styles.unread : ''}`}
              onClick={() => n.orderId && navigate(`/tracking/${n.orderId}`)}
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
};
