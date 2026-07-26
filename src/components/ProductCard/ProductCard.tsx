'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ProductService } from '../../mock/products';
import styles from './ProductCard.module.scss';

export interface ProductCardProps {
  product: ProductService;
  layout?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, layout = 'grid' }) => {
  const router = useRouter();

  return (
    <div
      className={`${styles.card} ${layout === 'list' ? styles.listLayout : ''}`}
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80';
          }}
        />
        {product.expressAvailable && (
          <span className={styles.badge}>⚡ 2-Hr Express</span>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.topInfo}>
          <span className={styles.categoryTag}>{product.category}</span>
          <h4 className={styles.title}>{product.name}</h4>
          <span className={styles.provider}>Fulfilling Studio: <strong>{product.providerName}</strong></span>
        </div>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <div>
            <span className={styles.priceLabel}>Starting from</span>
            <div className={styles.priceValue}>${product.basePrice.toFixed(2)}</div>
          </div>

          <div className={styles.metaRight}>
            <div className={styles.rating}>
              <span>★</span>
              <span>{product.rating}</span>
              <span className={styles.reviewCount}>({product.reviewCount})</span>
            </div>

            <button className={styles.configureBtn}>
              Configure Specs ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
