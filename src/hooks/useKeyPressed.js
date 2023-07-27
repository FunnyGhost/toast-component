import React from 'react';

export const useKeyPressed = (code, callback) => {
  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === code) {
        callback(event);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [code, callback]);
};
