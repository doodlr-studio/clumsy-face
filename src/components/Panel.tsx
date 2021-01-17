import React from 'react';
import PanelItem from './PanelItem';
import Sources from './Sources';
import { Enums } from '../constants';

const Panel: React.FC = () => {
  return (
    <>
      <PanelItem
        category={Enums.CHARACTER_PROPERTY.BODY}
        sources={Sources.BODY}
      />
      <PanelItem
        category={Enums.CHARACTER_PROPERTY.HAIR}
        sources={Sources.HAIR}
      />
    </>
  );
};

export default Panel;
