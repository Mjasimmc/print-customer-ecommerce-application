'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { TopHeader } from '../src/components/Navigation/TopHeader';
import { BottomNav } from '../src/components/Navigation/BottomNav';
import { ProductCard } from '../src/components/ProductCard/ProductCard';
import { ProviderCard } from '../src/components/ProviderCard/ProviderCard';
import { MOCK_CATEGORIES } from '../src/mock/categories';
import { MOCK_PRODUCTS } from '../src/mock/products';
import { MOCK_PROVIDERS } from '../src/mock/providers';
import { MOCK_ORDERS } from '../src/mock/orders';
import styles from '../src/pages/Home/HomePage.module.scss';

export default function HomePage() {
  const router = useRouter();
  const activeOrder = MOCK_ORDERS[0];

  return (
    <div>
      <TopHeader />

      <div className={styles.container}>
        {/* Search Hero */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            On-Demand Local Services & Custom Manufacturing
          </h1>

          <div className={styles.searchBar} onClick={() => router.push('/search')}>
            <span>🔍</span>
            <input type="text" placeholder="Search services, products, 3D prints, apparel, gifts..." readOnly />
            <span style={{ fontSize: '0.8rem', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', color: '#64748b' }}>Voice 🎙️</span>
          </div>
        </section>

        {/* Active Production Tracking Banner */}
        {activeOrder && (
          <div className={styles.activeOrderBanner} onClick={() => router.push(`/tracking/${activeOrder.id}`)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ fontSize: '1.5rem' }}>🛠️</div>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.9 }}>Active Service Progress</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{activeOrder.productName}</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.95 }}>{activeOrder.statusText} • Est: {activeOrder.estimatedDelivery}</div>
              </div>
            </div>
            <span style={{ fontWeight: 800, fontSize: '0.85rem' }}>Track ➔</span>
          </div>
        )}

        {/* Service Categories Scroll */}
        <section>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Explore Service Categories</h2>
            <span className={styles.seeAll} onClick={() => router.push('/search')}>All Categories ➔</span>
          </div>

          <div className={styles.categoriesScroll} style={{ marginTop: '0.75rem' }}>
            {MOCK_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className={styles.categoryCard}
                onClick={() => router.push(`/search?category=${cat.id}`)}
              >
                <div className={styles.iconBg}>{cat.icon}</div>
                <span className={styles.label}>{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Verified Local Service Providers Shelf */}
        <section>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nearby Service Providers</h2>
            <span className={styles.seeAll} onClick={() => router.push('/providers')}>View All ➔</span>
          </div>

          <div className={styles.providersList} style={{ marginTop: '0.75rem' }}>
            {MOCK_PROVIDERS.map((prov) => (
              <ProviderCard key={prov.id} provider={prov} />
            ))}
          </div>
        </section>

        {/* Popular Services & Products Grid */}
        <section>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Popular Local Services</h2>
            <span className={styles.seeAll} onClick={() => router.push('/search')}>Browse All ➔</span>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: '0.75rem' }}>
            {MOCK_PRODUCTS.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
}
