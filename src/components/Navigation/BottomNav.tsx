import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BottomNav.module.scss';

export const BottomNav: React.FC = () => {
  return (
    <nav className={styles.bottomNav}>
      <NavLink to="/" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <div className={styles.iconWrapper}>🏠</div>
        <span>Explore</span>
      </NavLink>

      <NavLink to="/search" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <div className={styles.iconWrapper}>🔍</div>
        <span>Services</span>
      </NavLink>

      <NavLink to="/cart" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <div className={styles.iconWrapper}>
          🛒
          <span className={styles.badge}>1</span>
        </div>
        <span>Cart</span>
      </NavLink>

      <NavLink to="/orders" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <div className={styles.iconWrapper}>📦</div>
        <span>Orders</span>
      </NavLink>

      <NavLink to="/profile" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
        <div className={styles.iconWrapper}>👤</div>
        <span>Account</span>
      </NavLink>
    </nav>
  );
};
