import React from 'react';

export const useKeyPressed = (code) => {
  const [keyPressed, setKeyPressed] = React.useState(false);

  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === code) {
        setKeyPressed(true);
      } else {
        setKeyPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [code]);

  return [keyPressed, setKeyPressed];
};
