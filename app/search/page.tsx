'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProductCard } from '../../src/components/ProductCard/ProductCard';
import { BottomNav } from '../../src/components/Navigation/BottomNav';
import { MOCK_PRODUCTS } from '../../src/mock/products';
import { MOCK_CATEGORIES } from '../../src/mock/categories';
import styles from '../../src/pages/Search/SearchPage.module.scss';

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expressOnly, setExpressOnly] = useState(false);

  const filteredProducts = MOCK_PRODUCTS.filter((p) => {
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !activeCategory || p.categoryId === activeCategory;
    const matchesExpress = !expressOnly || p.expressAvailable;
    return matchesQuery && matchesCategory && matchesExpress;
  });

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.searchHeader}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }} onClick={() => router.push('/')}>
            ←
          </button>
          <div className={styles.searchInput}>
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search products, services, 3D printing, apparel..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setQuery('')}>
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Chips */}
        <div className={styles.filterChips}>
          <button
            className={`${styles.chip} ${activeCategory === null ? styles.active : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            All Services
          </button>
          <button
            className={`${styles.chip} ${expressOnly ? styles.active : ''}`}
            onClick={() => setExpressOnly(!expressOnly)}
          >
            ⚡ 2-Hour Express
          </button>
          {MOCK_CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`${styles.chip} ${activeCategory === c.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(activeCategory === c.id ? null : c.id)}
            >
              {c.icon} {c.name}
            </button>
          ))}
        </div>

        <div className={styles.resultsHeader}>
          <span>Showing {filteredProducts.length} local services & products</span>
          <span style={{ fontWeight: 600 }}>Sort: Recommended ▾</span>
        </div>

        {/* Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className={styles.resultsGrid}>
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#64748b' }}>
            <div style={{ fontSize: '3rem' }}>🔍</div>
            <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginTop: '0.5rem' }}>No local services found</h3>
            <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>Try adjusting your search terms or clearing category filters.</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
