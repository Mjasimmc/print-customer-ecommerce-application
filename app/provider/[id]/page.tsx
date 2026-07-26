'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../../src/ui';
import { TopHeader } from '../../../src/components/Navigation/TopHeader';
import { BottomNav } from '../../../src/components/Navigation/BottomNav';
import { ProductCard } from '../../../src/components/ProductCard/ProductCard';
import { MOCK_PROVIDERS } from '../../../src/mock/providers';
import { MOCK_PRODUCTS } from '../../../src/mock/products';
import styles from '../../../src/pages/ProviderDetails/ProviderDetailsPage.module.scss';

export default function ProviderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();

  const provider = MOCK_PROVIDERS.find((p) => p.id === resolvedParams.id) || MOCK_PROVIDERS[0];
  const providerProducts = MOCK_PRODUCTS.filter((p) => p.providerId === provider.id || p.providerName === provider.name);

  return (
    <div>
      <TopHeader />

      <div className={styles.container}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', color: '#2563eb', fontWeight: 600, width: 'fit-content' }} onClick={() => router.back()}>
          ← Back to Providers
        </button>

        {/* Provider Banner */}
        <div className={styles.providerBanner}>
          <div className={styles.providerInfo}>
            <img src={provider.avatar} alt={provider.name} className={styles.avatar} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>{provider.name}</h1>
                {provider.verified && <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '0.7rem', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px' }}>✓ Verified Storefront</span>}
              </div>

              <div style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '0.25rem' }}>
                <span>★ {provider.rating} ({provider.reviewCount} reviews)</span> • <span>📍 {provider.distance}</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: '0.25rem' }}>{provider.address}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="outline" size="sm" onClick={() => alert(`Calling ${provider.name}...`)}>
              📞 Call Shop
            </Button>
            <Button variant="primary" size="sm" onClick={() => alert(`Opening chat with ${provider.name}...`)}>
              💬 Message Shop
            </Button>
          </div>
        </div>

        {/* Offered Services & Products */}
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.875rem' }}>Offered Services & Catalog ({providerProducts.length > 0 ? providerProducts.length : MOCK_PRODUCTS.length})</h2>

          <div className={styles.servicesGrid}>
            {(providerProducts.length > 0 ? providerProducts : MOCK_PRODUCTS).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
