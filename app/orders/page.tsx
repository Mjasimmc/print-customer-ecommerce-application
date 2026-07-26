'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../src/ui';
import { MOCK_ORDERS } from '../../src/mock/orders';
import styles from '../../src/pages/OrderHistory/OrderHistoryPage.module.scss';

export default function OrdersPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed'>('all');

  const filteredOrders = MOCK_ORDERS.filter((order) => {
    if (activeTab === 'active') return order.status === 'in_production' || order.status === 'dispatched';
    if (activeTab === 'completed') return order.status === 'delivered';
    return true;
  });

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.header}>Production Telemetry & Orders</h1>
        <span className={styles.totalOrdersCount}>
          {MOCK_ORDERS.length} Total Orders
        </span>
      </div>

      {/* Tab Filters */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Orders ({MOCK_ORDERS.length})
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'active' ? styles.active : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Active Pipeline (1)
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'completed' ? styles.active : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Delivered (1)
        </button>
      </div>

      {/* Orders List */}
      <div className={styles.ordersList}>
        {filteredOrders.map((order) => (
          <div key={order.id} className={styles.orderCard}>
            <div className={styles.orderHeader}>
              <div>
                <div className={styles.orderNumber}>
                  Order #{order.orderNumber}
                </div>
                <div className={styles.orderDate}>
                  Placed on {order.createdAt}
                </div>
              </div>

              <span
                className={`${styles.badge} ${
                  order.status === 'delivered' ? styles.delivered : styles.in_production
                }`}
              >
                {order.statusText}
              </span>
            </div>

            <div className={styles.itemSummaryRow}>
              <div className={styles.itemIconBox}>
                📦
              </div>
              <div className={styles.itemDetails}>
                <div className={styles.itemName}>
                  {order.productName}
                </div>
                <div className={styles.itemSubtext}>
                  {order.itemCount} units • Studio: {order.providerName}
                </div>
              </div>
              <div className={styles.priceTag}>
                ${order.totalPrice.toFixed(2)}
              </div>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.etaText}>
                Est: {order.estimatedDelivery}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push(`/tracking/${order.id}`)}
              >
                Live Telemetry ➔
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
