'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProviderCard } from '../../components/ProviderCard/ProviderCard';
import { MOCK_CATEGORIES } from '../../mock/categories';
import { MOCK_PRODUCTS } from '../../mock/products';
import { MOCK_PROVIDERS } from '../../mock/providers';
import { MOCK_ORDERS } from '../../mock/orders';
import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  const router = useRouter();
  const activeOrder = MOCK_ORDERS[0];

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          On-Demand Local Services & Custom Manufacturing
        </h1>
        <div className={styles.searchBar} onClick={() => router.push('/search')}>
          <span>🔍</span>
          <input type="text" placeholder="Search services, products, 3D prints, apparel, gifts..." readOnly />
        </div>
      </section>

      {activeOrder && (
        <div className={styles.activeOrderBanner} onClick={() => router.push(`/tracking/${activeOrder.id}`)}>
          <div>
            <div>Active Service Progress</div>
            <div>{activeOrder.productName}</div>
          </div>
          <span>Track ➔</span>
        </div>
      )}

      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explore Service Categories</h2>
          <span className={styles.seeAll} onClick={() => router.push('/search')}>All Categories ➔</span>
        </div>

        <div className={styles.categoriesScroll}>
          {MOCK_CATEGORIES.map((cat) => (
            <div key={cat.id} className={styles.categoryCard} onClick={() => router.push(`/search?category=${cat.id}`)}>
              <div className={styles.iconBg}>{cat.icon}</div>
              <span className={styles.label}>{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nearby Service Providers</h2>
          <span className={styles.seeAll} onClick={() => router.push('/providers')}>View All ➔</span>
        </div>

        <div className={styles.providersList}>
          {MOCK_PROVIDERS.map((prov) => (
            <ProviderCard key={prov.id} provider={prov} />
          ))}
        </div>
      </section>

      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Popular Local Services</h2>
          <span className={styles.seeAll} onClick={() => router.push('/search')}>Browse All ➔</span>
        </div>

        <div className={styles.gridTwo}>
          {MOCK_PRODUCTS.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
