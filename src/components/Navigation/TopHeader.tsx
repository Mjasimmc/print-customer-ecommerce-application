'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { CommandPalette } from '../CommandPalette/CommandPalette';
import styles from './TopHeader.module.scss';

export interface TopHeaderProps {
  locationText?: string;
  hasUnreadNotifications?: boolean;
  hideOnMobile?: boolean;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  locationText = '742 Evergreen Terrace, SF',
  hasUnreadNotifications = true,
  hideOnMobile = false,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check theme status
    const theme = document.documentElement.getAttribute('data-theme');
    setIsDark(theme === 'dark');

    // Key listener for Ctrl+K / Cmd+K
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    setIsDark(!isDark);
  };

  return (
    <>
      <header className={`${styles.header} ${hideOnMobile ? styles.hideOnMobile : ''}`}>
        <div className={styles.inner}>
          {/* Left Brand & Delivery Hub */}
          <div className={styles.leftSection}>
            <div className={styles.brandLogo} onClick={() => router.push('/')}>
              <span className={styles.logoIcon}>❖</span>
              <span className={styles.logoText}>LOCAL<span className={styles.logoHighlight}>HUB</span></span>
              <span className={styles.osBadge}>OS</span>
            </div>

            <div className={styles.locationPicker} onClick={() => router.push('/profile')}>
              <span className={styles.locationLabel}>Deliver to</span>
              <span className={styles.locationValue} title={locationText}>
                📍 {locationText} <span className={styles.caret}>▾</span>
              </span>
            </div>
          </div>

          {/* Center Command Palette Search Launcher */}
          <div className={styles.commandLauncher} onClick={() => setIsCommandOpen(true)}>
            <span className={styles.cmdIcon}>🔍</span>
            <span className={styles.cmdPlaceholder}>Search services, 3D prints, apparel, providers...</span>
            <kbd className={styles.cmdKbd}>⌘K</kbd>
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
              Studios
            </Link>
            <Link href="/pricing" className={`${styles.navLink} ${pathname === '/pricing' ? styles.active : ''}`}>
              Pro Plans
            </Link>
            <Link href="/orders" className={`${styles.navLink} ${pathname === '/orders' ? styles.active : ''}`}>
              Orders
            </Link>
          </nav>

          {/* Right Action Icons */}
          <div className={styles.actions}>
            <button
              className={styles.themeBtn}
              onClick={toggleTheme}
              title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            <button className={styles.iconBtn} onClick={() => router.push('/cart')} title="Cart & Blueprints">
              🛒
              <span className={styles.badgeCount}>2</span>
            </button>

            <button className={styles.iconBtn} onClick={() => router.push('/notifications')} title="Notifications">
              🔔
              {hasUnreadNotifications && <span className={styles.dot} />}
            </button>
          </div>
        </div>
      </header>

      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </>
  );
};
