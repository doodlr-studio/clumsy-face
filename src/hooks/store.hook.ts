import { Store, StoreContext } from './store.context';
import { useCallback, useState } from 'react';

export const useStore = (): StoreContext => {
  const [store, setStore] = useState<Store>({
    ref: null,
    selectedIndex: {
      eyes: 0,
      nose: 0,
      mouth: 0,
    },
  });

  const setCurrentStore = useCallback((currentStore: Store): void => {
    console.log(`eyes: ${currentStore.selectedIndex.eyes}`);
    console.log(`nose: ${currentStore.selectedIndex.nose}`);
    console.log(`mouth: ${currentStore.selectedIndex.mouth}`);
    setStore(currentStore);
  }, []);

  return {
    store,
    setCurrentStore,
  };
};
