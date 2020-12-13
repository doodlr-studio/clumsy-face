import React from "react";
import { Canvas, Panel, Button } from "components";
/** @jsx jsx */ import { jsx, css, Global } from "@emotion/core";

const App: React.FC = () => {
  return (
    <main
      css={css`
        height: 400px;
      `}
    >
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <Canvas />
      <Panel />
    </main>
  );
};

export default App;
