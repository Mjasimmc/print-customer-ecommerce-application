'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from './TopHeader.module.scss';

export interface TopHeaderProps {
  locationText?: string;
  hasUnreadNotifications?: boolean;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  locationText = '742 Evergreen Terrace, SF',
  hasUnreadNotifications = true,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.leftSection}>
          <div className={styles.brandLogo} onClick={() => router.push('/')}>
            LOCALHUB
          </div>

          <div className={styles.locationPicker} onClick={() => router.push('/profile')}>
            <span className={styles.locationLabel}>Deliver to</span>
            <span className={styles.locationValue} title={locationText}>
              📍 {locationText} ▾
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
            Explore
          </Link>
          <Link href="/search" className={`${styles.navLink} ${pathname === '/search' ? styles.active : ''}`}>
            Services
          </Link>
          <Link href="/providers" className={`${styles.navLink} ${pathname === '/providers' ? styles.active : ''}`}>
            Local Providers
          </Link>
          <Link href="/pricing" className={`${styles.navLink} ${pathname === '/pricing' ? styles.active : ''}`}>
            Plans & Pro
          </Link>
          <Link href="/orders" className={`${styles.navLink} ${pathname === '/orders' ? styles.active : ''}`}>
            My Orders
          </Link>
          <Link href="/profile" className={`${styles.navLink} ${pathname === '/profile' ? styles.active : ''}`}>
            Account & Wallet
          </Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconBtn} onClick={() => router.push('/cart')} title="Cart & Orders">
            🛒
          </button>
          <button className={styles.iconBtn} onClick={() => router.push('/notifications')} title="Notifications">
            🔔
            {hasUnreadNotifications && <span className={styles.dot} />}
          </button>
        </div>
      </div>
    </header>
  );
};
