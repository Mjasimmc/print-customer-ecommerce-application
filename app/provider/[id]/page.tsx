'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../../src/ui';
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
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => router.back()}>
        ← Back to Local Studios
      </button>

      {/* Studio Banner */}
      <div className={styles.providerBanner}>
        <div className={styles.providerInfo}>
          <img src={provider.avatar} alt={provider.name} className={styles.avatar} />
          <div>
            <div className={styles.titleRow}>
              <h1 className={styles.studioName}>{provider.name}</h1>
              {provider.verified && (
                <span className={styles.verifiedBadge}>
                  ✓ Verified Storefront
                </span>
              )}
            </div>

            <div className={styles.ratingRow}>
              <span className={styles.starRating}>★ {provider.rating} ({provider.reviewCount} reviews)</span>
              <span>•</span>
              <span>📍 {provider.distance}</span>
            </div>
            <div className={styles.addressText}>{provider.address}</div>
          </div>
        </div>

        <div className={styles.bannerActions}>
          <Button variant="outline" size="sm" onClick={() => alert(`Calling ${provider.name}...`)}>
            📞 Call Studio
          </Button>
          <Button variant="primary" size="sm" onClick={() => alert(`Opening chat with ${provider.name}...`)}>
            💬 Direct Message
          </Button>
        </div>
      </div>

      {/* Offered Services & Products */}
      <div>
        <h2 className={styles.sectionHeader}>
          Studio Catalog & Capabilities ({providerProducts.length > 0 ? providerProducts.length : MOCK_PRODUCTS.length})
        </h2>

        <div className={styles.servicesGrid}>
          {(providerProducts.length > 0 ? providerProducts : MOCK_PRODUCTS).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
