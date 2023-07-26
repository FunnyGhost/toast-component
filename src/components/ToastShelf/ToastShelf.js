import React, { useContext } from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = useContext(ToastContext);

  const toastElements = toasts.map((toast) => {
    return (
      <li className={styles.toastWrapper} key={toast.id}>
        <Toast toast={toast} />
      </li>
    );
  });

  return (
    <ol role='region' aria-live='polite' aria-label='Notification' className={styles.wrapper}>
      {toastElements}
    </ol>
  );
}

export default ToastShelf;
