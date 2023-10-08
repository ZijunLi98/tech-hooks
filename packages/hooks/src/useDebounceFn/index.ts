import isDev from '../utils/isDev';
import { isFunction } from '../utils';
import useLatest from '../useLatest';
import { debounce } from '../utils/lodash-polyfill';
import { useMemo } from 'react';
import useUnmount from '../useUnmount';

export interface Options {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
  }

type noop = (...args: any[]) => any;

function useDebounceFn(fn: noop, options?: Options) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useDebounceFn expected parameter is a function, got ${typeof fn}`);
    }
  }

  const fnRef = useLatest(fn);

  const wait = options?.wait ?? 1000;

  const debounced = useMemo(() => {
    return debounce(
      (...args: Parameters<noop>): ReturnType<noop> => {
        return fnRef.current(...args);
      },
      wait,
      options,
    );
  }, []);

  useUnmount(() => {
    debounced.cancel();
  });

  return { run: debounced, cancel: debounced.cancel, flush: debounced.flush };
}

export default useDebounceFn;
