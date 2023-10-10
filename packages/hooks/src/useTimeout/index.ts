import { useCallback, useRef, useEffect } from 'react';
import { isNumber } from '../utils';
import useMemoizedFn from '../useMemoizedFn';

function useTimeout(fn: () => void, delay?: number | null) {
  const timerCallback = useMemoizedFn(fn);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearFn = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  useEffect(() => {
    if (!isNumber(delay) || delay < 0) {
      return;
    }
    timerRef.current = setTimeout(timerCallback, delay);
    return clearFn;
  }, [delay]);
  
  return clearFn;
}

export default useTimeout;
