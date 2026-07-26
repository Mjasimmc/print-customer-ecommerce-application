'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopHeader } from '../../src/components/Navigation/TopHeader';
import { BottomNav } from '../../src/components/Navigation/BottomNav';
import { ProviderCard } from '../../src/components/ProviderCard/ProviderCard';
import { MOCK_PROVIDERS } from '../../src/mock/providers';
import styles from '../../src/pages/Providers/ProvidersPage.module.scss';

export default function ProvidersPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const filteredProviders = MOCK_PROVIDERS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.specialties.some((s) => s.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div>
      <TopHeader />

      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <h1 className={styles.title}>Verified Local Service Providers</h1>
            <p className={styles.subtitle}>Discover top-rated local print shops, 3D labs, embroidery studios, and makers.</p>
          </div>

          <div className={styles.searchBar}>
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search providers or specialties..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.grid}>
          {filteredProviders.map((prov) => (
            <ProviderCard key={prov.id} provider={prov} onClick={() => router.push(`/provider/${prov.id}`)} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
