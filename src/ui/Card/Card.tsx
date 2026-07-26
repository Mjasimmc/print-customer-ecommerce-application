import React from 'react';
import styles from './Card.module.scss';

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '', style, onClick }) => {
  return (
    <div className={`${styles.card} ${className}`} style={style} onClick={onClick}>
      {title && <div className={styles.header}>{title}</div>}
      <div className={styles.body}>{children}</div>
    </div>
  );
};
