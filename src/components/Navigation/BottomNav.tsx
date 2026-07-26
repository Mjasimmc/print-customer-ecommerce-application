'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BottomNav.module.scss';

export const BottomNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Explore', href: '/', icon: '⚡' },
    { label: 'Services', href: '/search', icon: '🔍' },
    { label: 'Cart', href: '/cart', icon: '🛒', badge: '2' },
    { label: 'Orders', href: '/orders', icon: '📦' },
    { label: 'Account', href: '/profile', icon: '👤' },
  ];

  return (
    <nav className={styles.bottomNav}>
      <div className={styles.dockInner}>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
            >
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{item.icon}</span>
                {item.badge && <span className={styles.badge}>{item.badge}</span>}
              </div>
              <span className={styles.label}>{item.label}</span>
              {isActive && <div className={styles.activeDot} />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
