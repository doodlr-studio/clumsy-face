import React from 'react';
import { Canvas, Controller, Panel } from 'components';
import { storeContext } from './hooks/store.context';
import { useStore } from './hooks/store.hook';

const App: React.FC = () => {
  const store = useStore();
  return (
    <main>
      <storeContext.Provider value={store}>
        <Canvas />
        <Panel />
        <Controller />
      </storeContext.Provider>
    </main>
  );
};

export default App;
