import { Store, StoreContext } from './store.context';
import { useCallback, useState } from 'react';

export const useStore = (): StoreContext => {
  const [store, setStore] = useState<Store>({
    ref: null,
    selectedIndex: {
      body: 0,
      hair: 0,
    },
  });

  const setCurrentStore = useCallback((currentStore: Store): void => {
    setStore(currentStore);
  }, []);

  return {
    store,
    setCurrentStore,
  };
};
