'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../src/ui';
import { TopHeader } from '../../src/components/Navigation/TopHeader';
import { BottomNav } from '../../src/components/Navigation/BottomNav';
import { PWAInstallPrompt } from '../../src/components/PWAInstallPrompt/PWAInstallPrompt';
import styles from '../../src/pages/Pricing/PricingPage.module.scss';

export default function PricingPage() {
  const router = useRouter();

  return (
    <div>
      <TopHeader />

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Transparent Service Plans & Pricing</h1>
          <p className={styles.subtitle}>No hidden fees, zero surprise charges. Pay as you go or upgrade to Local Pro Pass for free express fulfillment.</p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className={styles.plansGrid}>
          {/* Plan 1: Pay As You Go */}
          <div className={styles.planCard}>
            <div className={styles.planHeader}>
              <span className={styles.planName}>Pay-As-You-Go</span>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>For individuals & occasional local service orders.</p>
              <div className={styles.planPrice}>
                <span className={styles.priceVal}>$0</span>
                <span className={styles.priceUnit}>/ month</span>
              </div>
            </div>

            <ul className={styles.featureList}>
              <li><span className={styles.checkIcon}>✓</span> Access to 500+ local verified businesses</li>
              <li><span className={styles.checkIcon}>✓</span> 300 DPI pre-flight file inspection</li>
              <li><span className={styles.checkIcon}>✓</span> Real-time dynamic pricing calculator</li>
              <li><span className={styles.checkIcon}>✓</span> 2-Hour Express Courier option available</li>
              <li><span className={styles.checkIcon}>✓</span> Standard customer support</li>
            </ul>

            <Button variant="secondary" size="md" style={{ marginTop: 'auto' }} onClick={() => router.push('/')}>
              Start Ordering Free
            </Button>
          </div>

          {/* Plan 2: Local Pro Pass */}
          <div className={`${styles.planCard} ${styles.featured}`}>
            <span className={styles.badgePopular}>Most Popular</span>
            <div className={styles.planHeader}>
              <span className={styles.planName}>Local Pro Pass</span>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>For active businesses, creators & frequent buyers.</p>
              <div className={styles.planPrice}>
                <span className={styles.priceVal}>$19</span>
                <span className={styles.priceUnit}>/ month</span>
              </div>
            </div>

            <ul className={styles.featureList}>
              <li><span className={styles.checkIcon}>✓</span> <strong>FREE 2-Hour Express Delivery</strong> on orders $25+</li>
              <li><span className={styles.checkIcon}>✓</span> <strong>10% Cashback Rebate</strong> into Service Wallet</li>
              <li><span className={styles.checkIcon}>✓</span> Priority provider production queue</li>
              <li><span className={styles.checkIcon}>✓</span> Unlimited PDF proof & STL model storage</li>
              <li><span className={styles.checkIcon}>✓</span> Dedicated VIP support agent</li>
            </ul>

            <Button variant="primary" size="md" style={{ marginTop: 'auto' }} onClick={() => alert('Activated Local Pro Pass 30-Day Free Trial!')}>
              Start 30-Day Free Trial
            </Button>
          </div>

          {/* Plan 3: Enterprise & Custom */}
          <div className={styles.planCard}>
            <div className={styles.planHeader}>
              <span className={styles.planName}>Enterprise Custom</span>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>For corporations with high-volume manufacturing needs.</p>
              <div className={styles.planPrice}>
                <span className={styles.priceVal}>Custom</span>
              </div>
            </div>

            <ul className={styles.featureList}>
              <li><span className={styles.checkIcon}>✓</span> Wholesale bulk pricing tiers</li>
              <li><span className={styles.checkIcon}>✓</span> Guaranteed SLA production agreement</li>
              <li><span className={styles.checkIcon}>✓</span> Multi-user corporate team billing</li>
              <li><span className={styles.checkIcon}>✓</span> Custom API & ERP integrations</li>
              <li><span className={styles.checkIcon}>✓</span> Dedicated account executive</li>
            </ul>

            <Button variant="outline" size="md" style={{ marginTop: 'auto' }} onClick={() => alert('Contacting Enterprise Sales Team...')}>
              Contact Sales
            </Button>
          </div>
        </div>

        {/* Trust & Guarantee Section */}
        <div className={styles.trustSection}>
          <div className={styles.trustItem}>
            <span className={styles.icon}>🔒</span>
            <div>
              <div className={styles.tTitle}>256-Bit SSL Encrypted</div>
              <div className={styles.tDesc}>Your payments are processed securely through Service Wallet and bank-level encryption.</div>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.icon}>🛡️</span>
            <div>
              <div className={styles.tTitle}>100% Quality Guarantee</div>
              <div className={styles.tDesc}>If your order does not meet specifications or file pre-flight standards, we reprint or refund immediately.</div>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.icon}>⚡</span>
            <div>
              <div className={styles.tTitle}>Transparent Price Calculator</div>
              <div className={styles.tDesc}>What you see is what you pay. Zero surprise delivery fees or checkout markups.</div>
            </div>
          </div>
        </div>
      </div>

      <PWAInstallPrompt />
      <BottomNav />
    </div>
  );
}
