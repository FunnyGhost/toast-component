import React, { useContext } from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import { ToastContext } from '../ToastProvider';
import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ toast }) {
  const { removeToast } = useContext(ToastContext);

  const IconToUse = ICONS_BY_VARIANT[toast.variant];
  const styleToUse = styles[toast.variant];

  return (
    <div className={`${styles.toast} ${styleToUse}`}>
      <div className={styles.iconContainer}>
        <IconToUse size={24} />
      </div>
      <p className={styles.content}>{toast.message}</p>
      <button className={styles.closeButton} onClick={() => removeToast(toast.id)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
