'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../src/ui';
import styles from '../../src/pages/Pricing/PricingPage.module.scss';

export default function PricingPage() {
  const router = useRouter();
  const [monthlySpend, setMonthlySpend] = useState(500);

  const annualSavings = Math.round(monthlySpend * 12 * 0.15 + 120);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.categoryTag}>LocalHub Membership OS</div>
        <h1 className={styles.title}>Supercharge Your Local Printing & 3D Production</h1>
        <p className={styles.subtitle}>
          Unlock priority studio dispatch, volume discounts, instant API access, and dedicated pre-flight engineering support.
        </p>
      </div>

      {/* Interactive ROI Savings Calculator */}
      <div className={styles.roiCalculatorCard}>
        <div className={styles.roiHeader}>
          <div>
            <h3 className={styles.roiTitle}>Calculate Your Business ROI & Savings</h3>
            <p className={styles.roiSubtitle}>
              Slide your estimated monthly custom manufacturing & print budget:
            </p>
          </div>
          <div className={styles.roiSavingsBox}>
            <div className={styles.savingsLabel}>Estimated Annual ROI Savings</div>
            <div className={styles.savingsValue}>+${annualSavings}/yr</div>
          </div>
        </div>

        <div className={styles.sliderRow}>
          <span style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>$100</span>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(Number(e.target.value))}
            className={styles.rangeSlider}
          />
          <span style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>$5,000+</span>
          <span className={styles.spendPill}>${monthlySpend}/mo Spend</span>
        </div>
      </div>

      {/* Pricing Tiers Grid */}
      <div className={styles.plansGrid}>
        {/* Starter Plan */}
        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <span className={styles.planName}>Pay-As-You-Go</span>
            <div className={styles.planPrice}>
              <span className={styles.priceVal}>$0</span>
              <span className={styles.priceUnit}>/ month</span>
            </div>
          </div>

          <ul className={styles.featureList}>
            <li><span className={styles.checkIcon}>✓</span> On-demand local studio ordering</li>
            <li><span className={styles.checkIcon}>✓</span> Standard pre-flight file check</li>
            <li><span className={styles.checkIcon}>✓</span> Real-time GPS courier tracking</li>
            <li><span className={styles.checkIcon}>✓</span> Community studio reviews</li>
          </ul>

          <Button variant="outline" size="md" className={styles.cardAction} onClick={() => router.push('/search')}>
            Get Started Free ➔
          </Button>
        </div>

        {/* Pro Plan (Featured) */}
        <div className={`${styles.planCard} ${styles.featured}`}>
          <span className={styles.badgePopular}>Most Popular for Businesses</span>

          <div className={styles.planHeader}>
            <span className={styles.planName}>LocalHub Pro</span>
            <div className={styles.planPrice}>
              <span className={styles.priceVal}>$29</span>
              <span className={styles.priceUnit}>/ month</span>
            </div>
          </div>

          <ul className={styles.featureList}>
            <li><span className={styles.checkIcon}>✓</span> 15% Flat Discount on all orders</li>
            <li><span className={styles.checkIcon}>✓</span> Unlimited Free 2-Hour Express Courier</li>
            <li><span className={styles.checkIcon}>✓</span> Automatic 3D mesh & vector repair</li>
            <li><span className={styles.checkIcon}>✓</span> Dedicated studio priority queue</li>
            <li><span className={styles.checkIcon}>✓</span> Net-30 monthly invoicing</li>
          </ul>

          <Button variant="primary" size="md" className={styles.cardAction} onClick={() => alert('Welcome to LocalHub Pro! Subscription activated.')}>
            Start 14-Day Free Pro Trial ➔
          </Button>
        </div>

        {/* Enterprise Plan */}
        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <span className={styles.planName}>Enterprise Fleet</span>
            <div className={styles.planPrice}>
              <span className={styles.priceVal}>$149</span>
              <span className={styles.priceUnit}>/ month</span>
            </div>
          </div>

          <ul className={styles.featureList}>
            <li><span className={styles.checkIcon}>✓</span> Custom Volume Contract Pricing</li>
            <li><span className={styles.checkIcon}>✓</span> Multi-user Team Workspace</li>
            <li><span className={styles.checkIcon}>✓</span> API access & Webhooks</li>
            <li><span className={styles.checkIcon}>✓</span> Dedicated Solutions Engineer</li>
            <li><span className={styles.checkIcon}>✓</span> Custom Quality SLA Guarantee</li>
          </ul>

          <Button variant="outline" size="md" className={styles.cardAction} onClick={() => alert('Enterprise Inquiry Sent! A team member will contact you within 1 hour.')}>
            Contact Sales Engineering ➔
          </Button>
        </div>
      </div>

      {/* Trust Badges */}
      <div className={styles.trustSection}>
        <div className={styles.trustItem}>
          <span className={styles.icon}>🛡️</span>
          <div>
            <div className={styles.tTitle}>100% Quality Assurance</div>
            <div className={styles.tDesc}>Free re-print guarantee if specs do not match your approved proof.</div>
          </div>
        </div>

        <div className={styles.trustItem}>
          <span className={styles.icon}>⚡</span>
          <div>
            <div className={styles.tTitle}>2-Hour Hyperlocal Dispatch</div>
            <div className={styles.tDesc}>Direct courier pick up from nearest local verified printing hub.</div>
          </div>
        </div>

        <div className={styles.trustItem}>
          <span className={styles.icon}>🔒</span>
          <div>
            <div className={styles.tTitle}>Enterprise NDA & Security</div>
            <div className={styles.tDesc}>Your CAD models and design assets are encrypted end-to-end.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
