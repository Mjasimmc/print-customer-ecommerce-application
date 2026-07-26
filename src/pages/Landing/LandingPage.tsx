import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@print-delivery/ui';
import { QualityInspector } from '../../components/QualityInspector/QualityInspector';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { MOCK_PRODUCTS } from '../../mock/products';
import styles from './LandingPage.module.scss';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.landingWrapper}>
      {/* Landing Top Header */}
      <header className={styles.landingHeader}>
        <div className={styles.navContainer}>
          <div className={styles.logo} onClick={() => navigate('/')}>
            LOCALHUB
          </div>

          <nav className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#showcase">Services & Products</a>
            <a href="#providers">Providers</a>
            <a href="#reviews">Trust & Ratings</a>
          </nav>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Button variant="primary" size="md" onClick={() => navigate('/')}>
              Launch App ➔
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.trustBadge}>
          ⚡ Universal Hyperlocal On-Demand Services & Local Commerce
        </div>

        <h1 className={styles.heroHeadline}>
          Discover Local Service Providers, Custom Manufacturing & Express Courier Delivery
        </h1>

        <p className={styles.heroSubhead}>
          Order 3D prints, custom apparel, business branding, laser engraving, signage, and photography services from verified local businesses delivered to your door in 2 hours.
        </p>

        <div className={styles.ctaGroup}>
          <Button variant="primary" size="lg" onClick={() => navigate('/')}>
            Explore Local Marketplace ➔
          </Button>
          <Button variant="outline" size="lg" onClick={() => navigate('/search')}>
            Search Catalog
          </Button>
        </div>

        {/* Live Interactive Product Preview Showcase */}
        <div className={styles.heroDeviceShowcase}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontStyle: 'normal', fontWeight: 700 }}>Live Project File Inspection & Pre-Flight Check</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>Precision 3D Resin Engineering Part</h3>
            </div>
            <span style={{ background: '#ecfdf5', color: '#047857', fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '9999px' }}>
              300 DPI Verified
            </span>
          </div>

          <QualityInspector fileName="mechanical_enclosure_v3.stl" dpi={300} pageSize="FDM/SLA Spec" />
        </div>
      </section>

      {/* Stats Banner */}
      <section style={{ padding: '0 1.5rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div className={styles.statsBanner}>
          <div>
            <div className={styles.statVal}>2 Hours</div>
            <div className={styles.statLabel}>Average Express Dispatch</div>
          </div>
          <div>
            <div className={styles.statVal}>500+</div>
            <div className={styles.statLabel}>Verified Local Businesses</div>
          </div>
          <div>
            <div className={styles.statVal}>4.9 ★</div>
            <div className={styles.statLabel}>Marketplace Rating</div>
          </div>
          <div>
            <div className={styles.statVal}>100%</div>
            <div className={styles.statLabel}>Quality Assurance Guarantee</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How LocalHub Works</h2>
          <p className={styles.sectionSubtitle}>Four simple steps from service selection to doorstep completion.</p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineStep}>
            <span className={styles.stepNum}>STEP 01</span>
            <h4 style={{ fontWeight: 700 }}>Discover & Select Service</h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Browse 3D printing, custom gifts, embroidery, branding, signs, and graphic design.</p>
          </div>

          <div className={styles.timelineStep}>
            <span className={styles.stepNum}>STEP 02</span>
            <h4 style={{ fontWeight: 700 }}>Configure Specs & Upload</h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Select materials, finishes, volume, and upload project files with automatic quality checks.</p>
          </div>

          <div className={styles.timelineStep}>
            <span className={styles.stepNum}>STEP 03</span>
            <h4 style={{ fontWeight: 700 }}>Local Provider Production</h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Order is immediately sent to a verified nearby service provider for fast execution.</p>
          </div>

          <div className={styles.timelineStep}>
            <span className={styles.stepNum}>STEP 04</span>
            <h4 style={{ fontWeight: 700 }}>2-Hour Courier Delivery</h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Track live courier GPS movement on the map until your order is delivered.</p>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="showcase" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Local Services</h2>
          <p className={styles.sectionSubtitle}>Explore top-rated professional services ready for instant order.</p>
        </div>

        <div className={styles.gridFour}>
          {MOCK_PRODUCTS.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.section}>
        <div style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', color: '#ffffff', borderRadius: '1.25rem', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Need Local Services Done Today?</h2>
          <p style={{ maxStyle: '500px', fontSize: '1.05rem', opacity: 0.9 }}>Get started now. Connect with verified local businesses with 2-hour express delivery.</p>
          <Button variant="secondary" size="lg" style={{ marginTop: '0.5rem' }} onClick={() => navigate('/')}>
            Launch Customer Marketplace ➔
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <div className={styles.logo} style={{ marginBottom: '0.5rem' }}>LOCALHUB</div>
            <p style={{ fontSize: '0.85rem', color: '#64748b', maxWidth: '300px' }}>
              Universal on-demand local services & hyperlocal commerce marketplace platform.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '3rem', fontSize: '0.85rem', color: '#475569' }}>
            <div>
              <h5 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Platform</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
                <a href="#how-it-works" style={{ color: 'inherit', textDecoration: 'none' }}>How It Works</a>
                <a href="#showcase" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a>
              </div>
            </div>

            <div>
              <h5 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Support</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                <span>Help Center</span>
                <span>2-Hour Guarantee</span>
                <span>Privacy & Terms</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxStyle: '1200px', margin: '2rem auto 0', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9', textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8' }}>
          © 2026 LocalHub Platform. All rights reserved. Universal Hyperlocal Service Marketplace.
        </div>
      </footer>
    </div>
  );
};
