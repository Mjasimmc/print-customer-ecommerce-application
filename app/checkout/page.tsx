'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../src/ui';
import styles from '../../src/pages/Checkout/CheckoutPage.module.scss';

export default function CheckoutPage() {
  const router = useRouter();

  const [selectedAddress, setSelectedAddress] = useState('addr-1');
  const [selectedSpeed, setSelectedSpeed] = useState('express');
  const [selectedPayment, setSelectedPayment] = useState('applepay');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const addresses = [
    { id: 'addr-1', label: 'Primary Studio', detail: '742 Evergreen Terrace, San Francisco, CA 94107', tag: 'Default' },
    { id: 'addr-2', label: 'Office Workshop', detail: '100 Mission St, Suite 400, San Francisco, CA 94105' },
  ];

  const handlePlaceOrder = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
    }, 1200);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.stepHeader}>
          <span className={styles.stepTitle}>
            Express Production Dispatch
          </span>
          <span className={styles.stepSubtitle}>Step 3 of 3</span>
        </div>
        <div className={styles.progressTrack}>
          <div className={`${styles.progressStep} ${styles.active}`} />
          <div className={`${styles.progressStep} ${styles.active}`} />
          <div className={`${styles.progressStep} ${styles.active}`} />
        </div>
      </div>

      {/* Delivery Location Selector */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.sectionTitle}>1. Destination Address</h2>
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`${styles.card} ${styles.selectable} ${selectedAddress === addr.id ? styles.selected : ''}`}
            onClick={() => setSelectedAddress(addr.id)}
          >
            <div className={styles.cardHeaderRow}>
              <span className={styles.cardLabel}>
                📍 {addr.label}
              </span>
              {addr.tag && (
                <span className={styles.defaultBadge}>
                  {addr.tag}
                </span>
              )}
            </div>
            <p className={styles.cardDetailText}>{addr.detail}</p>
          </div>
        ))}
      </div>

      {/* Fulfilling Speed Option */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.sectionTitle}>2. Production & Delivery Velocity</h2>
        <div
          className={`${styles.card} ${styles.selectable} ${selectedSpeed === 'express' ? styles.selected : ''}`}
          onClick={() => setSelectedSpeed('express')}
        >
          <div className={styles.cardHeaderRow}>
            <span className={styles.cardLabel}>
              ⚡ 2-Hour Express Local Courier
            </span>
            <span className={styles.priceAddon}>+$9.99</span>
          </div>
          <p className={styles.cardDetailText}>
            Assigned to Express Print Lab SF with instant courier pickup upon completion.
          </p>
        </div>

        <div
          className={`${styles.card} ${styles.selectable} ${selectedSpeed === 'standard' ? styles.selected : ''}`}
          onClick={() => setSelectedSpeed('standard')}
        >
          <div className={styles.cardHeaderRow}>
            <span className={styles.cardLabel}>
              🚚 Standard Same-Day (By 8 PM)
            </span>
            <span className={styles.freeTag}>FREE</span>
          </div>
          <p className={styles.cardDetailText}>
            Batch dispatch with standard neighborhood courier delivery.
          </p>
        </div>
      </div>

      {/* Payment Method Selector */}
      <div className={styles.sectionBlock}>
        <h2 className={styles.sectionTitle}>3. Secure Instant Payment Gateway</h2>
        <div className={styles.paymentGrid}>
          {[
            { id: 'applepay', label: 'Pay', icon: '' },
            { id: 'card', label: 'Visa • 4242', icon: '💳' },
            { id: 'invoice', label: 'Pro Net-30', icon: '📄' },
          ].map((pm) => (
            <div
              key={pm.id}
              className={`${styles.paymentCard} ${selectedPayment === pm.id ? styles.selected : ''}`}
              onClick={() => setSelectedPayment(pm.id)}
            >
              <div className={styles.paymentIcon}>{pm.icon}</div>
              <div className={styles.paymentLabel}>
                {pm.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Submit Button */}
      <Button
        variant="primary"
        size="lg"
        className={styles.submitBtn}
        onClick={handlePlaceOrder}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Transmitting Production Blueprint...' : 'Confirm & Dispatch Production ($89.12) ➔'}
      </Button>

      {/* Success Telemetry Modal */}
      {showModal && (
        <div className={styles.confirmationModal}>
          <div className={styles.modalContent}>
            <div className={styles.successIcon}>✓</div>
            <h2 className={styles.modalTitle}>
              Production Blueprint Transmitted!
            </h2>
            <p className={styles.modalDesc}>
              Your order <strong>#ORD-9482</strong> has been accepted by <strong>Express Print Lab SF</strong>. Pre-flight verification passed.
            </p>
            <Button
              variant="primary"
              size="md"
              className={styles.telemetryBtn}
              onClick={() => router.push('/tracking/ord-1')}
            >
              Open Live GPS Telemetry ➔
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
