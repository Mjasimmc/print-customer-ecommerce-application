'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BottomNav.module.scss';

export const BottomNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.bottomNav}>
      <Link href="/" className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}>
        <div className={styles.iconWrapper}>🏠</div>
        <span>Explore</span>
      </Link>

      <Link href="/search" className={`${styles.navItem} ${pathname === '/search' ? styles.active : ''}`}>
        <div className={styles.iconWrapper}>🔍</div>
        <span>Services</span>
      </Link>

      <Link href="/cart" className={`${styles.navItem} ${pathname === '/cart' ? styles.active : ''}`}>
        <div className={styles.iconWrapper}>
          🛒
          <span className={styles.badge}>1</span>
        </div>
        <span>Cart</span>
      </Link>

      <Link href="/orders" className={`${styles.navItem} ${pathname === '/orders' ? styles.active : ''}`}>
        <div className={styles.iconWrapper}>📦</div>
        <span>Orders</span>
      </Link>

      <Link href="/profile" className={`${styles.navItem} ${pathname === '/profile' ? styles.active : ''}`}>
        <div className={styles.iconWrapper}>👤</div>
        <span>Account</span>
      </Link>
    </nav>
  );
};
