import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, removeToast }) {
  const toastElements = toasts.map((toast) => {
    return (
      <li className={styles.toastWrapper} key={toast.id}>
        <Toast variant={toast.variant} onDismiss={() => removeToast(toast.id)}>
          {toast.message}
        </Toast>
      </li>
    );
  });

  return <ol className={styles.wrapper}>{toastElements}</ol>;
}

export default ToastShelf;
