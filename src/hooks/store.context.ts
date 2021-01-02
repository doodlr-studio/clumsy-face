import { createContext, RefObject } from 'react';
import { CharacterPropertyIndex } from '../classes/Character';

export interface Store {
  ref: RefObject<SVGSVGElement> | null;
  selectedIndex: CharacterPropertyIndex;
}

export interface StoreContext {
  store: Store;
  setCurrentStore: (currentStore: Store) => void;
}

export const STORE_DEFAULT_VALUE = {
  store: {
    ref: null,
    selectedIndex: {
      eyes: 0,
      nose: 0,
      mouth: 0,
    },
  },
  setCurrentStore: () => {},
};

export const storeContext = createContext<StoreContext>(STORE_DEFAULT_VALUE);
