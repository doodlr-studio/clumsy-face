import React, { useContext, useEffect, useRef } from 'react';
import Sources from './Sources';
import { Size } from '../classes/Source';
import { storeContext } from '../hooks/store.context';

const Frame: React.FC<Size> = ({ width, height }) => {
  const { store, setCurrentStore } = useContext(storeContext);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setCurrentStore({
      ...store,
      ref: svgRef,
    });
  }, []);

  console.log(`render Frame`);

  return (
    <div style={{ border: '4px solid black', display: 'inline-block' }}>
      <svg
        ref={svgRef}
        width={width / 3}
        height={height / 3}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg">
        <title>Character Frame</title>
        <desc>Doodlr Studio.</desc>

        <g id="body">{Sources.BODY[store.selectedIndex.body]}</g>
        <g id="hair">
          <style type="text/css">{`#hair .st0{fill:#243858;}`}</style>
          {Sources.HAIR[store.selectedIndex.hair]}
        </g>
      </svg>
    </div>
  );
};

export default Frame;
