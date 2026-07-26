'use client';

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../../src/ui';
import { TopHeader } from '../../../src/components/Navigation/TopHeader';
import { QualityInspector } from '../../../src/components/QualityInspector/QualityInspector';
import { MOCK_PRODUCTS } from '../../../src/mock/products';
import styles from '../../../src/pages/ProductDetails/ProductDetailsPage.module.scss';

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();

  const product = MOCK_PRODUCTS.find((p) => p.id === resolvedParams.id) || MOCK_PRODUCTS[0];

  const [selectedMaterial, setSelectedMaterial] = useState(product.specifications.materials[0] || 'Standard');
  const [selectedFinish, setSelectedFinish] = useState(product.specifications.finishes[0] || 'Standard');
  const [quantity, setQuantity] = useState(100);

  // Real-time dynamic price calculation
  const calculateTotal = () => {
    let base = product.basePrice;
    const scale = quantity / 100;
    const discount = quantity >= 1000 ? 0.6 : quantity >= 500 ? 0.75 : quantity >= 250 ? 0.85 : 1.0;
    return (base * scale * discount).toFixed(2);
  };

  return (
    <div>
      <TopHeader />

      <div className={styles.navHeader}>
        <button className={styles.backBtn} onClick={() => router.back()}>← Back</button>
        <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Service Requirements & Specs</span>
        <span style={{ cursor: 'pointer' }} onClick={() => router.push('/cart')}>🛒</span>
      </div>

      <div className={styles.container}>
        {/* Left Column: Gallery & Quality Pre-flight */}
        <div>
          <div className={styles.gallery}>
            <img src={product.image} alt={product.name} />
          </div>

          <div style={{ marginTop: '1rem' }}>
            <QualityInspector fileName="project_design_file_v1.pdf" dpi={300} pageSize="Standard Spec" />
          </div>
        </div>

        {/* Right Column: Configurator Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className={styles.detailsHeader}>
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.metaRow}>
              <span>★ {product.rating} ({product.reviewCount} reviews)</span>
              <span>•</span>
              <span>Offered by {product.providerName}</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.25rem' }}>{product.description}</p>
          </div>

          {/* Material Selector */}
          <div className={styles.optionSection}>
            <h3 className={styles.sectionLabel}>Select Material & Grade</h3>
            <div className={styles.radioGroup}>
              {product.specifications.materials.map((mat) => (
                <div
                  key={mat}
                  className={`${styles.radioCard} ${selectedMaterial === mat ? styles.selected : ''}`}
                  onClick={() => setSelectedMaterial(mat)}
                >
                  <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{mat}</span>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Included</span>
                </div>
              ))}
            </div>
          </div>

          {/* Finish & Customization Selector */}
          <div className={styles.optionSection}>
            <h3 className={styles.sectionLabel}>Lamination & Finishing Options</h3>
            <div className={styles.radioGroup}>
              {product.specifications.finishes.map((fin) => (
                <div
                  key={fin}
                  className={`${styles.radioCard} ${selectedFinish === fin ? styles.selected : ''}`}
                  onClick={() => setSelectedFinish(fin)}
                >
                  <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{fin}</span>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Included</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className={styles.optionSection}>
            <h3 className={styles.sectionLabel}>Quantity & Volume Tier</h3>
            <div className={styles.qtyGrid}>
              {[
                { qty: 100, discount: '' },
                { qty: 250, discount: '15% OFF' },
                { qty: 500, discount: '25% OFF' },
                { qty: 1000, discount: '40% OFF' },
              ].map((q) => (
                <div
                  key={q.qty}
                  className={`${styles.qtyCard} ${quantity === q.qty ? styles.selected : ''}`}
                  onClick={() => setQuantity(q.qty)}
                >
                  <span style={{ fontWeight: 700, fontSize: '1rem' }}>{q.qty}</span>
                  <span style={{ fontSize: '0.7rem' }}>units</span>
                  {q.discount && <span className={styles.discountBadge}>{q.discount}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Bottom Bar */}
          <div className={styles.stickyBottomBar}>
            <div className={styles.priceContainer}>
              <span className={styles.totalLabel}>Estimated Total</span>
              <span className={styles.totalValue}>${calculateTotal()}</span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button variant="outline" size="md" onClick={() => router.push('/cart')}>
                Add to Cart
              </Button>
              <Button variant="primary" size="md" onClick={() => router.push('/checkout')}>
                Order Now ➔
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
