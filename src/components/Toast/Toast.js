import React from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, onDismiss, children }) {
  const IconToUse = ICONS_BY_VARIANT[variant];
  const styleToUse = styles[variant];

  return (
    <div className={`${styles.toast} ${styleToUse}`}>
      <div className={styles.iconContainer}>
        <IconToUse size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={onDismiss}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
