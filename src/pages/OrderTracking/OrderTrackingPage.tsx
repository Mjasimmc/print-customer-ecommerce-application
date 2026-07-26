import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@print-delivery/ui';
import { OrderTimeline } from '../../components/OrderTimeline/OrderTimeline';
import { BottomNav } from '../../components/Navigation/BottomNav';
import { MOCK_ORDERS } from '../../mock/orders';
import styles from './OrderTrackingPage.module.scss';

export const OrderTrackingPage: React.FC = () => {
  const navigate = useNavigate();
  const order = MOCK_ORDERS[0]; // Active production order

  return (
    <div>
      <div className={styles.container}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem' }} onClick={() => navigate('/orders')}>
            ← Back
          </button>
          <span style={{ fontWeight: 800, fontSize: '1rem' }}>Order #{order.orderNumber}</span>
          <span style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 700 }}>Receipt 📄</span>
        </div>

        {/* Map Placeholder Card */}
        <div className={styles.mapCard}>
          <div style={{ textAlign: 'center', color: '#1e3a8a' }}>
            <div style={{ fontSize: '2.25rem' }}>🗺️</div>
            <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Live GPS Express Driver Tracking</div>
          </div>

          <div className={styles.mapOverlay}>
            <div>
              <div style={{ fontSize: '0.6875rem', color: '#64748b', textTransform: 'uppercase' }}>Estimated Arrival</div>
              <div style={{ fontWeight: 800, fontSize: '0.9375rem', color: '#0f172a' }}>5:30 PM (24 mins left)</div>
            </div>
            <span style={{ background: '#ecfdf5', color: '#047857', fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: '9999px' }}>
              On Schedule
            </span>
          </div>
        </div>

        {/* Courier Box */}
        <div className={styles.courierBox}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Courier Driver</div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>🚴 {order.courierName}</div>
            <div style={{ fontSize: '0.75rem', color: '#059669' }}>Verified Express Courier</div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className={styles.contactBtn} title="Call Driver">📞</button>
            <button className={styles.contactBtn} title="Message Driver">💬</button>
          </div>
        </div>

        {/* Production Timeline */}
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Service Production & Delivery Timeline</h3>
          <OrderTimeline steps={order.timeline} />
        </div>

        {/* Item Summary */}
        <div style={{ background: '#ffffff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h4 style={{ fontWeight: 700, fontSize: '0.9rem' }}>Service Specification Summary</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
            <span>{order.productName} ({order.itemCount} units)</span>
            <span style={{ fontWeight: 700 }}>${order.totalPrice.toFixed(2)}</span>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Provider: {order.providerName}</span>
          <Button variant="outline" size="sm" style={{ marginTop: '0.5rem' }} onClick={() => navigate('/orders')}>
            Repeat Order
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
