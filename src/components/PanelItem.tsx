import React, { useContext, useEffect, useState } from 'react';
import { Enums } from '../constants';
import { storeContext } from '../hooks/store.context';
import { Source } from '../classes/Source';

interface PanelItemProps {
  category: typeof Enums.CHARACTER_PROPERTY[keyof typeof Enums.CHARACTER_PROPERTY];
  sources: Source[];
}

const PanelItem: React.FC<PanelItemProps> = ({ category, sources }) => {
  const { store, setCurrentStore } = useContext(storeContext);
  const [index, setIndex] = useState<number>(0);

  const handleChange = (e: any) => {
    setIndex(e.target.value as number);
  };

  useEffect(
    () => {
      store.selectedIndex[category] = index;
      setCurrentStore({ ...store });
    },
    [index],
  );

  console.log('panelItem render');
  return (
    <>
      <label>{category}</label>
      <select onChange={e => handleChange(e)}>
        {sources.map((o, i) => {
          return (
            <option key={i} value={i} selected={index == i}>
              {i}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default PanelItem;
