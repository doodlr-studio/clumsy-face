import React, { useContext } from 'react';
import { storeContext } from '../hooks/store.context';

const Controller: React.FC = () => {
  const { store } = useContext(storeContext);
  const handleClick = () => {
    if (store.ref) {
      const base64doc = btoa(
        unescape(
          encodeURIComponent(
            '<?xml version="1.0" encoding="UTF-8"?>' +
              store.ref.current!.outerHTML,
          ),
        ),
      );

      const a = document.createElement('a');
      a.href = 'data:image/svg+xml;base64,' + base64doc;
      a.download = 'clumsy-face.svg';
      a.click();
    }
  };

  console.log('render controller');
  return (
    <>
      <button onClick={handleClick}> Download</button>
    </>
  );
};

export default Controller;
