import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductService } from '../../mock/products';
import styles from './ProductCard.module.scss';

export interface ProductCardProps {
  product: ProductService;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/product/${product.id}`)}>
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
        <h4 className={styles.title}>{product.name}</h4>
        <span className={styles.provider}>By {product.providerName}</span>

        <div className={styles.footer}>
          <div>
            <span className={styles.priceLabel}>Starting at</span>
            <div className={styles.priceValue}>${product.basePrice.toFixed(2)}</div>
          </div>

          <div className={styles.rating}>
            <span>★</span>
            <span>{product.rating}</span>
            <span style={{ color: '#94a3b8', fontWeight: 400 }}>({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};
