import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [showToast, setShowToast] = React.useState(false);

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

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
        <Toast variant={variant} onDismiss={() => setShowToast(false)}>
          {message}
        </Toast>
      )}

      <div className={styles.controlsWrapper}>
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
            <Button onClick={() => setShowToast(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
