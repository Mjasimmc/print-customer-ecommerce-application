import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import styles from './TopHeader.module.scss';

export interface TopHeaderProps {
  locationText?: string;
  hasUnreadNotifications?: boolean;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  locationText = '742 Evergreen Terrace, SF',
  hasUnreadNotifications = true,
}) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.leftSection}>
          <div className={styles.brandLogo} onClick={() => navigate('/')}>
            LOCALHUB
          </div>

          <div className={styles.locationPicker} onClick={() => navigate('/profile')}>
            <span className={styles.locationLabel}>Deliver to</span>
            <span className={styles.locationValue}>
              📍 {locationText} ▾
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          <NavLink to="/" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Explore
          </NavLink>
          <NavLink to="/search" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Services
          </NavLink>
          <NavLink to="/providers" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Local Providers
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Plans & Pro
          </NavLink>
          <NavLink to="/orders" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            My Orders
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
            Account & Wallet
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconBtn} onClick={() => navigate('/cart')} title="Cart & Orders">
            🛒
          </button>
          <button className={styles.iconBtn} onClick={() => navigate('/notifications')} title="Notifications">
            🔔
            {hasUnreadNotifications && <span className={styles.dot} />}
          </button>
        </div>
      </div>
    </header>
  );
};
