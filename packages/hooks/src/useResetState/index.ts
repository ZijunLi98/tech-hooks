import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

type ResetState = () => void;

const useResetState = <S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, ResetState] => {
  const [state, setState] = useState(initialState);

  const resetState = useCallback(() => {
    setState(initialState);
  }, []);

  return [state, setState, resetState];
};

export default useResetState;
