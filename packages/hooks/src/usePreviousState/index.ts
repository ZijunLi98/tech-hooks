import { useRef } from 'react';

export type ShouldUpdateFunc<T> = (prev: T | undefined, next: T) => boolean;

const defaultShouldUpdate = <T>(a?: T, b?: T) => !Object.is(a, b);

function usePreviousState<T>(state: T, shouldUpdate: ShouldUpdateFunc<T> = defaultShouldUpdate) {
  const previousRef = useRef<T>();
  const curRef = useRef<T>();

  if (shouldUpdate(curRef.current, state)) {
    previousRef.current = curRef.current;
    curRef.current = state;
  }

  return previousRef.current;
}


export default usePreviousState;
