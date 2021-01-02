import React, { useContext, useEffect, useRef } from 'react';
import Part from './Part';
import { Enums, Sources } from '../constants';
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
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Character Frame</title>
        <desc>Doodlr Studio.</desc>
        <Part
          category={Enums.CHARACTER_PROPERTY.Eyes}
          source={Sources.EYES_LIST[store.selectedIndex.eyes]}
        />
        <Part
          category={Enums.CHARACTER_PROPERTY.Nose}
          source={Sources.NOSE_LIST[store.selectedIndex.nose]}
        />
        <Part
          category={Enums.CHARACTER_PROPERTY.Mouth}
          source={Sources.MOUTH_LIST[store.selectedIndex.mouth]}
        />
      </svg>
    </div>
  );
};

export default Frame;
