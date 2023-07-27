import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import { useKeyPressed } from '../../hooks/useKeyPressed';
import { ToastContext } from '../ToastProvider';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { createToast, clearToasts } = React.useContext(ToastContext);
  const handleEscape = React.useCallback(() => clearToasts(), [clearToasts]);
  useKeyPressed('Escape', handleEscape);

  const radioButtons = VARIANT_OPTIONS.map((possibleVariant) => {
    const idToUse = `variant-${possibleVariant}`;
    return (
      <label htmlFor={idToUse} key={idToUse}>
        <input
          id={idToUse}
          type='radio'
          name='variant'
          value={possibleVariant}
          onChange={() => setVariant(possibleVariant)}
          checked={variant === possibleVariant}
        />
        {possibleVariant}
      </label>
    );
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    createToast(message, variant);

    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={onFormSubmit}>
        <div className={styles.row}>
          <label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>{radioButtons}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type='submit'>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
