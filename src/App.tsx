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
        {/* <Canvas />
        <Panel />
        <Controller /> */}
        <Carousel containerWidth={400} elementWidth={60}>
            <div className="carousel--element">
              1
            </div>
            <div className="carousel--element">
              1
            </div>
            <div className="carousel--element">
              1
            </div>
            <div className="carousel--element">
              1
            </div>
            <div className="carousel--element">
              1
            </div>
            <div className="carousel--element">
              1
            </div>
            <div className="carousel--element">
              1
            </div>
            <div className="carousel--element">
              1
            </div>
            <div className="carousel--element">
              1
            </div>
            <div className="carousel--element">
              1
            </div>
            <div className="carousel--element">
              1
            </div>
            <div className="carousel--element">
              1
            </div>
            <div className="carousel--element selected">
              1
            </div>
        </Carousel>
      </storeContext.Provider>
    </main>
  );
};

export default App;
