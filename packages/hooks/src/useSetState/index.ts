import { isFunction } from './../utils/index';
import { useCallback, useState } from 'react';

export type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null),
) => void;

function useSetState<T extends Record<string, any>>(initialState: T | (() => T)): [T, SetState<T>] {
  const [state, setState] = useState(initialState);

  const setMergedState = useCallback((patch) => {
    setState((prevState) => {
      const newState = isFunction(patch) ? patch(prevState) : patch;
      return newState ? { ...prevState, ...newState } : prevState;
    });
  }, []);

  return [state, setMergedState];
}

export default useSetState;
