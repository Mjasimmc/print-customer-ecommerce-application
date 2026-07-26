'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../ui';
import styles from './CheckoutPage.module.scss';

export const CheckoutPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>Checkout</h1>
      <Button variant="primary" size="lg" onClick={() => router.push('/tracking/ord-1')}>
        Place Order ➔
      </Button>
    </div>
  );
};

export default CheckoutPage;
