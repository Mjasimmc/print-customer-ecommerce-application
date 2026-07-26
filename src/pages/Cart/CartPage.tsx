'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../ui';
import styles from './CartPage.module.scss';

export const CartPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.cartHeaderRow}>
        <h1 className={styles.cartHeader}>Cart & Manufacturing Blueprints</h1>
      </div>
      <div className={styles.summaryCard}>
        <Button variant="primary" size="lg" onClick={() => router.push('/checkout')}>
          Proceed to Checkout ➔
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
