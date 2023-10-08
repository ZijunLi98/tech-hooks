import { useCallback } from 'react';
import useSetState, { SetState } from '../useSetState';

function useResetState<S extends Record<string, any>>(
  initialState: S | (() => S),
): [S, SetState<S>, () => void] {
  const [state, setState] = useSetState(initialState);

  const resetState = useCallback(() => {
    setState(initialState);
  }, []);

  return [state, setState, resetState];
}

export default useResetState;
