import { useEffect, useState } from 'react';
import useDebounceFn, { Options } from '../useDebounceFn';

function useDebounce(value: any, options?: Options) {
  const [debounced, setDebounced] = useState(value);

  const { run } = useDebounceFn(() => setDebounced(value), options);

  useEffect(() => {
    run();
  }, [value]);

  return debounced;
}

export default useDebounce;
