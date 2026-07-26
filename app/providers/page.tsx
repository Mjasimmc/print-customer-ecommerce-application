'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
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
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div>
          <h1 className={styles.title}>Verified Local Manufacturing Studios & Print Hubs</h1>
          <p className={styles.subtitle}>
            Discover top-rated local print shops, SLA/FDM 3D labs, embroidery workshops, and laser cutting centers.
          </p>
        </div>

        <div className={styles.searchBar}>
          <span style={{ color: 'var(--color-primary)' }}>🔍</span>
          <input
            type="text"
            placeholder="Search studios, machinery, or specialties..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-subtle)' }} onClick={() => setQuery('')}>
              ✕
            </button>
          )}
        </div>
      </div>

      <div className={styles.grid}>
        {filteredProviders.map((prov) => (
          <ProviderCard key={prov.id} provider={prov} onClick={() => router.push(`/provider/${prov.id}`)} />
        ))}
      </div>
    </div>
  );
}
