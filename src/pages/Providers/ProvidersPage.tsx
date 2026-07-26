import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopHeader } from '../../components/Navigation/TopHeader';
import { BottomNav } from '../../components/Navigation/BottomNav';
import { ProviderCard } from '../../components/ProviderCard/ProviderCard';
import { MOCK_PROVIDERS } from '../../mock/providers';
import styles from './ProvidersPage.module.scss';

export const ProvidersPage: React.FC = () => {
  const navigate = useNavigate();
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
            <ProviderCard key={prov.id} provider={prov} onClick={() => navigate(`/provider/${prov.id}`)} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
