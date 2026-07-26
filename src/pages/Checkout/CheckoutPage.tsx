import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@print-delivery/ui';
import { MOCK_USER_PROFILE } from '../../mock/userProfile';
import styles from './CheckoutPage.module.scss';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState('addr-1');
  const [selectedFulfillment, setSelectedFulfillment] = useState('express');
  const [selectedPayment, setSelectedPayment] = useState('wallet');
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.stepHeader}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem' }} onClick={() => navigate('/cart')}>
            ← Back
          </button>
          <span style={{ fontWeight: 700, fontSize: '1rem' }}>Express Checkout</span>
          <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700 }}>🔒 256-Bit SSL</span>
        </div>

        <div className={styles.progressTrack}>
          <div className={`${styles.progressStep} ${styles.active}`} />
          <div className={`${styles.progressStep} ${styles.active}`} />
          <div className={`${styles.progressStep} ${styles.active}`} />
          <div className={`${styles.progressStep} ${styles.active}`} />
        </div>

        {/* Step 1: Delivery Address */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h2 className={styles.sectionTitle}>1. Delivery Address</h2>
          {MOCK_USER_PROFILE.addresses.map((addr) => (
            <div
              key={addr.id}
              className={`${styles.card} ${styles.selectable} ${selectedAddress === addr.id ? styles.selected : ''}`}
              onClick={() => setSelectedAddress(addr.id)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>📍 {addr.label}</span>
                {selectedAddress === addr.id && <span style={{ color: '#2563eb', fontWeight: 800 }}>✓ Selected</span>}
              </div>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>{addr.address}</p>
            </div>
          ))}
        </section>

        {/* Step 2: Fulfillment Method */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h2 className={styles.sectionTitle}>2. Fulfillment Speed</h2>
          {[
            { id: 'express', label: '⚡ 2-Hour Express Courier', fee: '$5.99', est: 'Today by 5:30 PM' },
            { id: 'standard', label: '🚚 Standard Ground Delivery', fee: '$2.99', est: 'Tomorrow by 2:00 PM' },
            { id: 'pickup', label: '🏬 In-Store Pickup at Apex Craft Studio', fee: 'FREE', est: 'Ready in 45 mins' },
          ].map((m) => (
            <div
              key={m.id}
              className={`${styles.card} ${styles.selectable} ${selectedFulfillment === m.id ? styles.selected : ''}`}
              onClick={() => setSelectedFulfillment(m.id)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{m.label}</span>
                <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#2563eb' }}>{m.fee}</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Est: {m.est}</span>
            </div>
          ))}
        </section>

        {/* Step 3: Payment Method */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h2 className={styles.sectionTitle}>3. Payment Method</h2>
          {[
            { id: 'wallet', label: `💳 Service Wallet Balance ($${MOCK_USER_PROFILE.walletBalance.toFixed(2)})`, note: 'Instant One-Tap Pay' },
            { id: 'apple-pay', label: '🍏 Apple Pay / Google Pay', note: 'Fast & Secure' },
            { id: 'card-1', label: '💳 Visa ending in 4242', note: 'Saved Card' },
          ].map((p) => (
            <div
              key={p.id}
              className={`${styles.card} ${styles.selectable} ${selectedPayment === p.id ? styles.selected : ''}`}
              onClick={() => setSelectedPayment(p.id)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{p.label}</span>
                {selectedPayment === p.id && <span style={{ color: '#2563eb', fontWeight: 800 }}>✓ Selected</span>}
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{p.note}</span>
            </div>
          ))}
        </section>

        {/* Final Payment Button */}
        <div style={{ marginTop: '1rem' }}>
          <Button variant="primary" size="lg" style={{ width: '100%' }} onClick={() => setIsOrderConfirmed(true)}>
            Pay $43.79 & Place Order
          </Button>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      {isOrderConfirmed && (
        <div className={styles.confirmationModal}>
          <div className={styles.modalContent}>
            <div className={styles.successIcon}>✓</div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Order Placed!</h2>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Your order <strong>#PD-893012</strong> has been accepted by Apex Craft & Print Studio. Production has started!
            </p>
            <Button variant="primary" size="lg" style={{ width: '100%' }} onClick={() => navigate('/tracking/ord-1094')}>
              Track Live Progress ➔
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
