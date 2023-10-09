import { useCallback } from 'react';
import useToggle from '../useToggle';

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
  set: (val: boolean) => void;
}

function useBoolean(defaultValue: boolean = false): [boolean, Actions] {
  // defaultValue 不一定是 boolean，通过 !! 转换为 boolean 类型
  const [state, { toggle, set }] = useToggle(!!defaultValue);

  const setTrue = useCallback(() => set(true), []);
  const setFalse = useCallback(() => set(false), []);
  const setNew = useCallback((val) => set(!!val), []);

  //   const actions: Actions = {
  //     setTrue: () => set(true),
  //     setFalse: () => set(false),
  //     toggle,
  //     set: (val) => set(!!val),
  //   };

  return [state, { toggle, set: setNew, setTrue, setFalse }];
}

export default useBoolean;
