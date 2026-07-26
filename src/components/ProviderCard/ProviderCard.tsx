'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LocalServiceProvider } from '../../mock/providers';
import styles from './ProviderCard.module.scss';

export interface ProviderCardProps {
  provider: LocalServiceProvider;
  onClick?: () => void;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({ provider, onClick }) => {
  const router = useRouter();

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/provider/${provider.id}`);
    }
  };

  return (
    <div className={styles.providerCard} onClick={handleCardClick}>
      <img
        src={provider.avatar}
        alt={provider.name}
        className={styles.avatar}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&auto=format&fit=crop&q=80';
        }}
      />
      <div className={styles.details}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{provider.name}</span>
          {provider.verified && <span className={styles.verified} title="Verified Local Provider">✓ Verified</span>}
        </div>
        <div className={styles.meta}>
          <span>★ {provider.rating} ({provider.reviewCount} reviews)</span>
          <span>•</span>
          <span>📍 {provider.distance}</span>
        </div>
        <div className={styles.specialtiesRow} style={{ display: 'flex', gap: '4px', marginTop: '4px', flexWrap: 'wrap' }}>
          {provider.specialties.map((spec) => (
            <span key={spec} style={{ fontSize: '0.6875rem', background: '#eff6ff', color: '#2563eb', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
