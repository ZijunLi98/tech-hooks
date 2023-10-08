import { useCallback, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import useUnmountedRef from '../useUnmountedRef';

function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

function useSafeState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];

function useSafeState<S>(initialState?: S | (() => S)) {
  const [state, setState] = useState(initialState);
  const unmountedRef = useUnmountedRef();

  const setSafeState = useCallback((patch) => {
    if (unmountedRef.current === true) return;

    setState(patch);
  }, []);

  return [state, setSafeState];
}

export default useSafeState;
