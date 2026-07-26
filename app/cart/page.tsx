'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '../../src/ui';
import { BottomNav } from '../../src/components/Navigation/BottomNav';
import { MOCK_PRODUCTS } from '../../src/mock/products';
import styles from '../../src/pages/Cart/CartPage.module.scss';

export default function CartPage() {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [itemQty, setItemQty] = useState(250);

  const product = MOCK_PRODUCTS[0];
  const subtotal = product.basePrice * (itemQty / 100);
  const discount = promoApplied ? subtotal * 0.15 : 0;
  const deliveryFee = 5.99;
  const tax = (subtotal - discount) * 0.0825;
  const total = subtotal - discount + deliveryFee + tax;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'LOCALHERO20') {
      setPromoApplied(true);
    } else {
      alert('Enter LOCALHERO20 for 15% discount!');
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 className={styles.cartHeader}>Cart & Order Summary</h1>
          <span style={{ fontSize: '0.8rem', color: '#2563eb', cursor: 'pointer' }} onClick={() => router.push('/search')}>
            + Add Services
          </span>
        </div>

        {/* Grouped Provider Cart Item */}
        <div className={styles.providerGroup}>
          <div className={styles.providerHeader}>
            <span>🏪 Service Provider: {product.providerName}</span>
          </div>

          <div className={styles.itemCard}>
            <img src={product.image} alt={product.name} className={styles.itemImg} />
            <div className={styles.itemDetails}>
              <span className={styles.itemName}>{product.name}</span>
              <span className={styles.itemMeta}>16pt Soft-Touch Velvet • 300 DPI File Verified</span>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                <div className={styles.stepper}>
                  <button onClick={() => setItemQty(Math.max(100, itemQty - 50))}>-</button>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{itemQty} units</span>
                  <button onClick={() => setItemQty(itemQty + 50)}>+</button>
                </div>

                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#2563eb' }}>
                  ${subtotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Code Box */}
        <div style={{ background: '#ffffff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '0.875rem', display: 'flex', gap: '0.5rem' }}>
          <Input
            placeholder="Promo Code (LOCALHERO20)"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <Button variant="secondary" size="md" onClick={handleApplyPromo}>
            {promoApplied ? 'Applied ✓' : 'Apply'}
          </Button>
        </div>

        {/* Fee Breakdown */}
        <div className={styles.summaryCard}>
          <h3 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>Order Price Summary</h3>
          <div className={styles.row}>
            <span>Service Subtotal ({itemQty} units)</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          {promoApplied && (
            <div className={styles.row} style={{ color: '#059669', fontWeight: 600 }}>
              <span>Promo Discount (15% OFF)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}
          <div className={styles.row}>
            <span>⚡ 2-Hour Express Delivery</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className={styles.row}>
            <span>Estimated Local Tax (8.25%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className={`${styles.row} ${styles.total}`}>
            <span>Total Payable</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Button variant="primary" size="lg" style={{ marginTop: '0.5rem' }} onClick={() => router.push('/checkout')}>
            Proceed to Checkout ➔
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
