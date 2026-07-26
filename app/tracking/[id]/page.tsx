'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../../src/ui';
import { OrderTimeline } from '../../../src/components/OrderTimeline/OrderTimeline';
import { MOCK_ORDERS } from '../../../src/mock/orders';
import styles from '../../../src/pages/OrderTracking/OrderTrackingPage.module.scss';

export default function OrderTrackingPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();

  const order = MOCK_ORDERS.find((o) => o.id === resolvedParams.id) || MOCK_ORDERS[0];

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button
          className={styles.backBtn}
          onClick={() => router.push('/orders')}
        >
          ← Back to Orders
        </button>
        <span className={styles.orderTitle}>
          Telemetry Order #{order.orderNumber}
        </span>
        <button
          className={styles.receiptBtn}
          onClick={() => alert(`Receipt downloaded for Order #${order.orderNumber}`)}
        >
          Receipt 📄
        </button>
      </div>

      {/* Live Driver Map Placeholder Card */}
      <div className={styles.mapCard}>
        <div className={styles.mapHeader}>
          <div className={styles.mapIcon}>🗺️</div>
          <div className={styles.mapTitle}>Live Express GPS Dispatch Telemetry</div>
          <div className={styles.mapSubtitle}>Real-time satellite positioning active</div>
        </div>

        <div className={styles.mapOverlay}>
          <div>
            <div className={styles.etaLabel}>
              Estimated Delivery Window
            </div>
            <div className={styles.etaValue}>
              5:30 PM (24 mins remaining)
            </div>
          </div>
          <span className={styles.statusBadge}>
            ● On Schedule
          </span>
        </div>
      </div>

      {/* Verified Courier Details */}
      <div className={styles.courierBox}>
        <div>
          <div className={styles.driverLabel}>Assigned Driver</div>
          <div className={styles.driverName}>
            🚴 {order.courierName}
          </div>
          <div className={styles.driverVerified}>
            ✓ Verified Express Dispatcher
          </div>
        </div>
        <div className={styles.courierActions}>
          <button className={styles.contactBtn} title="Call Driver" onClick={() => alert(`Calling ${order.courierName}...`)}>📞</button>
          <button className={styles.contactBtn} title="Message Driver" onClick={() => alert(`Opening chat with ${order.courierName}...`)}>💬</button>
        </div>
      </div>

      {/* Live Production Pipeline Step Timeline */}
      <div>
        <h3 className={styles.pipelineHeader}>
          Service Production & Delivery Pipeline
        </h3>
        <OrderTimeline steps={order.timeline} />
      </div>

      {/* Specification Summary Card */}
      <div className={styles.specCard}>
        <h4 className={styles.specHeader}>Service Specification Summary</h4>
        <div className={styles.specRow}>
          <span style={{ fontWeight: 600 }}>{order.productName} ({order.itemCount} units)</span>
          <span className={styles.specPrice}>${order.totalPrice.toFixed(2)}</span>
        </div>
        <span className={styles.studioNameText}>
          Fulfilling Studio: {order.providerName}
        </span>
        <Button variant="outline" size="sm" style={{ width: 'fit-content', marginTop: '0.25rem' }} onClick={() => router.push('/orders')}>
          Repeat Order Spec 🔄
        </Button>
      </div>
    </div>
  );
}
