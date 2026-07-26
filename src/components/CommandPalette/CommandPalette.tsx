'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_PRODUCTS } from '../../mock/products';
import { MOCK_PROVIDERS } from '../../mock/providers';
import { MOCK_CATEGORIES } from '../../mock/categories';
import styles from './CommandPalette.module.scss';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Build command options list
  const systemActions = [
    { id: 'act-home', title: 'Go to Command Center Home', category: 'Navigation', icon: '⚡', action: () => router.push('/') },
    { id: 'act-search', title: 'Browse All Services Catalog', category: 'Navigation', icon: '🔍', action: () => router.push('/search') },
    { id: 'act-orders', title: 'Track Active Telemetry & Orders', category: 'Navigation', icon: '📦', action: () => router.push('/orders') },
    { id: 'act-cart', title: 'Open Cart & Blueprint Manager', category: 'Navigation', icon: '🛒', action: () => router.push('/cart') },
    { id: 'act-providers', title: 'Explore Nearby Verified Studios', category: 'Navigation', icon: '🏬', action: () => router.push('/providers') },
    { id: 'act-pricing', title: 'View Pro & Business Plans', category: 'Navigation', icon: '💎', action: () => router.push('/pricing') },
    { id: 'act-profile', title: 'Account Settings & Wallet', category: 'Navigation', icon: '⚙️', action: () => router.push('/profile') },
    { id: 'act-darkmode', title: 'Toggle Light / Dark Operating Mode', category: 'System Action', icon: '🌗', action: () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
      } 
    },
  ];

  const productActions = MOCK_PRODUCTS.map((p) => ({
    id: `prod-${p.id}`,
    title: p.name,
    category: 'Product Configurator',
    icon: '🛠️',
    subtitle: `$${p.basePrice} • ${p.category} • ${p.providerName}`,
    action: () => router.push(`/product/${p.id}`),
  }));

  const providerActions = MOCK_PROVIDERS.map((pr) => ({
    id: `prov-${pr.id}`,
    title: pr.name,
    category: 'Local Studio',
    icon: '🏬',
    subtitle: `★ ${pr.rating} • ${pr.distance} • Turnaround ${pr.turnaroundTime}`,
    action: () => router.push(`/provider/${pr.id}`),
  }));

  const allItems = [...systemActions, ...productActions, ...providerActions].filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q))
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(allItems.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + allItems.length) % Math.max(allItems.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (allItems[selectedIndex]) {
        allItems[selectedIndex].action();
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.inputHeader}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            placeholder="Type a command, search products, tracking or jump to screen..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
          <kbd className={styles.kbdEsc} onClick={onClose}>ESC</kbd>
        </div>

        <div className={styles.resultsList}>
          {allItems.length > 0 ? (
            allItems.map((item, idx) => (
              <div
                key={item.id}
                className={`${styles.resultItem} ${idx === selectedIndex ? styles.active : ''}`}
                onClick={() => {
                  item.action();
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <span className={styles.itemIcon}>{item.icon}</span>
                <div className={styles.itemMeta}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  {item.subtitle && <div className={styles.itemSubtitle}>{item.subtitle}</div>}
                </div>
                <span className={styles.categoryBadge}>{item.category}</span>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>No matching command or service found for "{query}"</div>
          )}
        </div>

        <div className={styles.footer}>
          <span>Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
          <span><kbd>↵</kbd> to execute</span>
          <span><kbd>ESC</kbd> to dismiss</span>
        </div>
      </div>
    </div>
  );
};
