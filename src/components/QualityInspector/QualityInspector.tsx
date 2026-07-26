'use client';

import React, { useState } from 'react';
import styles from './QualityInspector.module.scss';

export interface QualityInspectorProps {
  fileName?: string;
  dpi?: number;
  pageSize?: string;
  colorSpace?: string;
}

export const QualityInspector: React.FC<QualityInspectorProps> = ({
  fileName = 'manufacturing_blueprint_v3.stl',
  dpi = 300,
  pageSize = 'Standard Spec (3.5 x 2.0")',
  colorSpace = 'CMYK (FOGRA39 / High-Def)',
}) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const isHighQuality = dpi >= 300 || isFixed;

  const handleReanalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setIsFixed(true);
    }, 800);
  };

  return (
    <div className={styles.inspector}>
      <div className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <span className={styles.fileIcon}>📄</span>
          <div>
            <div className={styles.fileName}>{fileName}</div>
            <div className={styles.fileMeta}>{pageSize} • {colorSpace}</div>
          </div>
        </div>

        <span className={`${styles.statusBadge} ${isHighQuality ? styles.good : styles.warning}`}>
          {analyzing ? '⏳ Analyzing Mesh...' : isHighQuality ? '✓ Pre-flight Passed' : '⚠️ Resolution Alert'}
        </span>
      </div>

      <div className={styles.progressBar}>
        <div
          className={`${styles.progressFill} ${isHighQuality ? styles.good : styles.warning}`}
          style={{ width: analyzing ? '60%' : isHighQuality ? '100%' : '72%' }}
        />
      </div>

      <div className={styles.metricsGrid}>
        <div className={styles.metricBox}>
          <div className={styles.value}>{isFixed ? '300 DPI (Up-scaled)' : `${dpi} DPI`}</div>
          <div className={styles.label}>Resolution</div>
        </div>
        <div className={styles.metricBox}>
          <div className={styles.value}>CMYK / STL</div>
          <div className={styles.label}>Print Model</div>
        </div>
        <div className={styles.metricBox}>
          <div className={styles.value}>3.17 mm</div>
          <div className={styles.label}>Safety Bleed</div>
        </div>
      </div>

      <div className={styles.footerActions}>
        <span className={styles.checkText}>
          {isHighQuality ? '✓ Vector paths & raster assets optimal for production' : '⚠️ 240 DPI raster detected in layer 2'}
        </span>
        <button
          className={styles.fixBtn}
          onClick={handleReanalyze}
          disabled={analyzing || isFixed}
        >
          {analyzing ? 'Checking...' : isFixed ? '✓ Optimized' : '⚡ Auto-Optimize File'}
        </button>
      </div>
    </div>
  );
};
