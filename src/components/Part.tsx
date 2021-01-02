import React from 'react';
import { Source } from '../classes/Source';
import { Enums } from '../constants';

interface PartProps {
  category: typeof Enums.CHARACTER_PROPERTY[keyof typeof Enums.CHARACTER_PROPERTY];
  source: Source;
}

const Part: React.FC<PartProps> = ({ category, source }) => {
  return (
    <g
      id={category}
      transform={source.group.transform}
      fill={source.group.fill}
    >
      {source.paths.map((o, i) => <path key={i} d={o.d} fill={o.fill} />)}
    </g>
  );
};

export default Part;
