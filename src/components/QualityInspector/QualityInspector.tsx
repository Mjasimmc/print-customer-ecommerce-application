import React from 'react';
import styles from './QualityInspector.module.scss';

export interface QualityInspectorProps {
  fileName?: string;
  dpi?: number;
  pageSize?: string;
  colorSpace?: string;
}

export const QualityInspector: React.FC<QualityInspectorProps> = ({
  fileName = 'design_proof_v2.pdf',
  dpi = 300,
  pageSize = '3.5 x 2.0 in',
  colorSpace = 'CMYK (FOGRA39)',
}) => {
  const isHighQuality = dpi >= 300;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className={styles.fileIcon}>📄</span>
          <div>
            <div className={styles.fileName}>{fileName}</div>
            <div className={styles.fileMeta}>{pageSize} • {colorSpace}</div>
          </div>
        </div>

        <span className={`${styles.statusBadge} ${isHighQuality ? styles.good : styles.warning}`}>
          {isHighQuality ? '✓ 300 DPI Verified' : '⚠️ Resolution Warning'}
        </span>
      </div>

      <div className={styles.meterTrack}>
        <div
          className={`${styles.meterFill} ${isHighQuality ? styles.good : styles.warning}`}
          style={{ width: `${Math.min(100, (dpi / 300) * 100)}%` }}
        />
      </div>

      <div className={styles.checkList}>
        <div className={styles.checkItem}>
          <span className={styles.checkIcon}>✓</span>
          <span>Resolution ({dpi} DPI Ready)</span>
        </div>
        <div className={styles.checkItem}>
          <span className={styles.checkIcon}>✓</span>
          <span>Color Space ({colorSpace})</span>
        </div>
        <div className={styles.checkItem}>
          <span className={styles.checkIcon}>✓</span>
          <span>Bleed & Safe Zone Alignment</span>
        </div>
      </div>
    </div>
  );
};
