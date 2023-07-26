import React, { createContext } from 'react';
import ToastPlayground from '../ToastPlayground';

export const ToastContext = createContext();

function ToastProvider() {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (message, variant) => {
    const id = Math.floor(Math.random() * 10000);
    setToasts([...toasts, { id, message, variant }]);
  };

  const removeToast = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  };

  const clearToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider value={{ toasts, createToast, removeToast, clearToasts }}>
      <ToastPlayground />
    </ToastContext.Provider>
  );
}

export default ToastProvider;
