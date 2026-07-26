'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
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

  const quickShortcuts = [
    '3D Printing (STL)',
    'Embroidered Hoodies',
    'Laser Engraving',
    'Outdoor Banners',
    'Business Cards',
  ];

  return (
    <div className={styles.container}>
      {/* Operating System Hero Command Bar */}
      <section className={styles.heroSection}>
        <div className={styles.heroSubtitle}>
          <span>❖ Product Operating System</span>
          <span>•</span>
          <span>Hyperlocal Precision Manufacturing</span>
        </div>

        <h1 className={styles.heroTitle}>
          On-Demand Printing, 3D Fabrication & Local Delivery Engine
        </h1>

        <div className={styles.searchBar} onClick={() => router.push('/search')}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search 3D models, custom apparel, signage, corporate gifts or press ⌘K..."
            readOnly
          />
          <span className={styles.kbdBadge}>
            ⌘K Launcher
          </span>
        </div>

        {/* Quick Filter Shortcut Pills */}
        <div className={styles.shortcutTags}>
          <span className={styles.tagLabel}>Frequent Specs:</span>
          {quickShortcuts.map((sc) => (
            <span
              key={sc}
              className={styles.tagPill}
              onClick={() => router.push(`/search?q=${encodeURIComponent(sc)}`)}
            >
              {sc}
            </span>
          ))}
        </div>
      </section>

      {/* Active Production Tracking Telemetry Banner */}
      {activeOrder && (
        <div className={styles.activeOrderBanner} onClick={() => router.push(`/tracking/${activeOrder.id}`)}>
          <div className={styles.activeOrderInfo}>
            <div className={styles.activeOrderIcon}>
              ⚙️
            </div>
            <div>
              <div className={styles.activeOrderMeta}>
                Live Production Telemetry #{activeOrder.orderNumber}
              </div>
              <div className={styles.activeOrderName}>{activeOrder.productName}</div>
              <div className={styles.activeOrderEta}>
                {activeOrder.statusText} • Est Arrival: {activeOrder.estimatedDelivery}
              </div>
            </div>
          </div>
          <span className={styles.liveTelemetryTag}>
            Live Telemetry ➔
          </span>
        </div>
      )}

      {/* Service Categories Matrix */}
      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Custom Manufacturing Capabilities</h2>
          <span className={styles.seeAll} onClick={() => router.push('/search')}>View All Categories ➔</span>
        </div>

        <div className={styles.categoriesScroll}>
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

      {/* Nearby Verified Manufacturing Studios Shelf */}
      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Verified Nearby Local Studios</h2>
          <span className={styles.seeAll} onClick={() => router.push('/providers')}>Explore All Hubs ➔</span>
        </div>

        <div className={styles.providersList}>
          {MOCK_PROVIDERS.map((prov) => (
            <ProviderCard key={prov.id} provider={prov} />
          ))}
        </div>
      </section>

      {/* Popular Services & Products Grid */}
      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Popular Local Services & Materials</h2>
          <span className={styles.seeAll} onClick={() => router.push('/search')}>Full Catalog ➔</span>
        </div>

        <div className={styles.gridTwo}>
          {MOCK_PRODUCTS.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </div>
  );
}
