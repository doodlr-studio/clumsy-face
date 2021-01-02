import React from 'react';
import { Canvas, Controller, Panel } from 'components';

const App: React.FC = () => {
  return (
    <main>
      <Canvas />
      <Panel />
      <Controller />
    </main>
  );
};

export default App;
