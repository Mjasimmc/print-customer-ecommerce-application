import React from 'react';
import { TimelineStep } from '../../mock/orders';
import styles from './OrderTimeline.module.scss';

export interface OrderTimelineProps {
  steps: TimelineStep[];
}

export const OrderTimeline: React.FC<OrderTimelineProps> = ({ steps }) => {
  return (
    <div className={styles.timelineContainer}>
      {steps.map((step, idx) => {
        const isCompleted = step.completed;
        const isActive = step.active;

        return (
          <div
            key={idx}
            className={`${styles.step} ${isCompleted ? styles.completed : ''} ${isActive ? styles.active : ''}`}
          >
            <div className={styles.iconDot}>{isCompleted ? '✓' : isActive ? '●' : idx + 1}</div>
            <div className={styles.content}>
              <span className={styles.label}>{step.label}</span>
              {step.timestamp && <span className={styles.timestamp}>{step.timestamp}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};
