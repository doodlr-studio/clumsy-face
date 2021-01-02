import React from 'react';
import PanelItem from './PanelItem';
import { Enums, Sources } from '../constants';

const Panel: React.FC = () => {
  return (
    <>
      <PanelItem
        category={Enums.CHARACTER_PROPERTY.Eyes}
        sources={Sources.EYES_LIST}
      />
      <PanelItem
        category={Enums.CHARACTER_PROPERTY.Nose}
        sources={Sources.NOSE_LIST}
      />
      <PanelItem
        category={Enums.CHARACTER_PROPERTY.Mouth}
        sources={Sources.MOUTH_LIST}
      />
    </>
  );
};

export default Panel;
