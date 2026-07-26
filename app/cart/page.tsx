'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../src/ui';
import { MOCK_PRODUCTS } from '../../src/mock/products';
import styles from '../../src/pages/Cart/CartPage.module.scss';

export default function CartPage() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([
    {
      product: MOCK_PRODUCTS[0],
      quantity: 250,
      material: '350gsm Silk Cardstock',
      finish: 'Matte Lamination',
      unitPrice: 0.18,
    },
    {
      product: MOCK_PRODUCTS[1],
      quantity: 5,
      material: 'Ring-Spun Cotton',
      finish: 'Front & Back Embroidery',
      unitPrice: 28.50,
    },
  ]);

  const updateQuantity = (index: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item, idx) => {
        if (idx === index) {
          const nextQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: nextQty };
        }
        return item;
      })
    );
  };

  const removeItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const expressFee = 9.99;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + expressFee + tax;

  return (
    <div className={styles.container}>
      <div className={styles.cartHeaderRow}>
        <h1 className={styles.cartHeader}>Active Production Blueprint & Cart</h1>
        <span className={styles.itemCountBadge}>
          {cartItems.length} Fulfilling Items
        </span>
      </div>

      {cartItems.length > 0 ? (
        <>
          {/* Cart Item Blueprint Groups */}
          <div className={styles.providerGroup}>
            <div className={styles.providerHeader}>
              <span>🏬 Verified Fulfilling Studio: Express Print Lab SF</span>
              <span className={styles.dispatchBadge}>
                2-Hour Dispatch Ready
              </span>
            </div>

            {cartItems.map((item, idx) => (
              <div key={idx} className={styles.itemCard}>
                <img src={item.product.image} alt={item.product.name} className={styles.itemImg} />
                <div className={styles.itemDetails}>
                  <div className={styles.itemNameRow}>
                    <span className={styles.itemName}>{item.product.name}</span>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeItem(idx)}
                      title="Remove Item"
                    >
                      ✕
                    </button>
                  </div>

                  <div className={styles.itemMeta}>
                    Spec: {item.material} • {item.finish}
                  </div>

                  <div className={styles.itemActionRow}>
                    <div className={styles.stepper}>
                      <button onClick={() => updateQuantity(idx, -10)}>-</button>
                      <span className={styles.qtyValue}>
                        {item.quantity}
                      </span>
                      <button onClick={() => updateQuantity(idx, 10)}>+</button>
                    </div>

                    <div className={styles.itemTotalPrice}>
                      ${(item.unitPrice * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price & Delivery Summary */}
          <div className={styles.summaryCard}>
            <h3 className={styles.summaryTitle}>Production Blueprint Cost</h3>

            <div className={styles.row}>
              <span>Production Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className={styles.row}>
              <span>⚡ Express Courier Dispatch (2-Hour Window)</span>
              <span>${expressFee.toFixed(2)}</span>
            </div>

            <div className={styles.row}>
              <span>Estimated Sales Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className={`${styles.row} ${styles.total}`}>
              <span>Total Estimated Investment</span>
              <span className={styles.grandTotalValue}>${grandTotal.toFixed(2)}</span>
            </div>

            <Button
              variant="primary"
              size="lg"
              className={styles.checkoutActionBtn}
              onClick={() => router.push('/checkout')}
            >
              Proceed to Dispatch & Checkout ➔
            </Button>
          </div>
        </>
      ) : (
        <div className={styles.emptyStateCard}>
          <div className={styles.emptyIcon}>🛒</div>
          <h3 className={styles.emptyTitle}>Your Cart is Empty</h3>
          <p className={styles.emptyDesc}>
            You don't have any custom print specifications or 3D manufacturing blueprints queued for production.
          </p>
          <Button variant="primary" size="md" onClick={() => router.push('/search')}>
            Explore Services Catalog ➔
          </Button>
        </div>
      )}
    </div>
  );
}
