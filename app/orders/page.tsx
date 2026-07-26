'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../src/ui';
import { BottomNav } from '../../src/components/Navigation/BottomNav';
import { MOCK_ORDERS } from '../../src/mock/orders';
import styles from '../../src/pages/OrderHistory/OrderHistoryPage.module.scss';

export default function OrderHistoryPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'delivered'>('all');

  const filteredOrders = MOCK_ORDERS.filter((ord) => {
    if (activeTab === 'active') return ord.status === 'in_production';
    if (activeTab === 'delivered') return ord.status === 'delivered';
    return true;
  });

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>Customer Orders</h1>

        <div className={styles.tabs}>
          <button className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`} onClick={() => setActiveTab('all')}>
            All ({MOCK_ORDERS.length})
          </button>
          <button className={`${styles.tab} ${activeTab === 'active' ? styles.active : ''}`} onClick={() => setActiveTab('active')}>
            In Production (1)
          </button>
          <button className={`${styles.tab} ${activeTab === 'delivered' ? styles.active : ''}`} onClick={() => setActiveTab('delivered')}>
            Completed (1)
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredOrders.map((ord) => (
            <div key={ord.id} className={styles.orderCard}>
              <div className={styles.orderHeader}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{ord.orderNumber}</span>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{ord.date}</div>
                </div>
                <span className={`${styles.badge} ${styles[ord.status]}`}>{ord.statusText}</span>
              </div>

              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0f172a' }}>
                {ord.productName} ({ord.itemCount} units)
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Fulfilled by {ord.providerName}</div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px dashed #f1f5f9' }}>
                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#2563eb' }}>${ord.totalPrice.toFixed(2)}</span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Button variant="outline" size="sm" onClick={() => router.push(`/tracking/${ord.id}`)}>
                    Track Live
                  </Button>
                  <Button variant="primary" size="sm" onClick={() => router.push('/checkout')}>
                    ⚡ Repeat Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
