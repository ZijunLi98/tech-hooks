import { useEffect, useRef } from 'react';

function useUnmountedRef() {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = false;

    return () => {
      mountedRef.current = true;
    };
  }, []);

  return mountedRef;
}

export default useUnmountedRef;
