import React from 'react';
import { Canvas, Controller, Panel } from 'components';
import { Carousel } from 'components/Carousel';
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
        <Carousel containerWidth={400} itemWidth={100}>
          <li key={1} style={{ width: 100 }}>
            1
          </li>
          <li key={2} style={{ width: 100 }}>
            2
          </li>
          <li key={3} style={{ width: 100 }}>
            3
          </li>
          <li key={4} style={{ width: 100 }}>
            4
          </li>
          <li key={5} style={{ width: 100 }}>
            5
          </li>
        </Carousel>
      </storeContext.Provider>
    </main>
  );
};

export default App;
