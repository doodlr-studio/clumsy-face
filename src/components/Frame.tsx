import React, { useState } from 'react';
import Part from './Part';
import { Enums, Sources } from '../constants';
import { Size } from '../classes/Source';

interface CharacterPropertyIndex {
  eyes: number;
  nose: number;
  mouth: number;
  accessories?: number[];
}

const Frame: React.FC<Size> = ({ width, height }) => {
  const [index, setIndex] = useState<CharacterPropertyIndex>({
    eyes: 0,
    nose: 0,
    mouth: 1,
  });

  return (
    <>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <title>Character Frame</title>
        <desc>Doodlr Studio.</desc>
        <Part
          category={Enums.CHARACTER_PROPERTY.Eyes}
          source={Sources.EYES_LIST[index.eyes]}
        />
        <Part
          category={Enums.CHARACTER_PROPERTY.Nose}
          source={Sources.NOSE_LIST[index.nose]}
        />
        <Part
          category={Enums.CHARACTER_PROPERTY.Mouth}
          source={Sources.MOUTH_LIST[index.mouth]}
        />
      </svg>
    </>
  );
};

export default Frame;
