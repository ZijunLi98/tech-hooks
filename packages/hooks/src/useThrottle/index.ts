import { useEffect, useState } from 'react';
import useThrottleFn, { ThrottleOptions } from '../useThrottleFn';

function useThrottle<T>(value: T, options?: ThrottleOptions): T {
  const [throttled, setThrottled] = useState(value);

  const { run } = useThrottleFn(() => {
    setThrottled(value);
  }, options);

  useEffect(() => {
    run();
  }, [value]);

  return throttled;
}

export default useThrottle;
