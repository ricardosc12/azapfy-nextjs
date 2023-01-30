import { create } from 'zustand'
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { mergeDeepLeft } from "ramda";
import  secureLocalStorage  from  "react-secure-storage";

import createAuth from './Auth';
import createLogo from './Logo';

const store = (set) => ({
    auth: createAuth(set),
    logo: createLogo(set)
});

const useStore = create(
    devtools(
      persist(immer(store), {
        name: "storage",
        getStorage: () => secureLocalStorage,
        merge: (persistedState, currentState) =>
          mergeDeepLeft(persistedState, currentState)
      })
    )
  );

export default useStore