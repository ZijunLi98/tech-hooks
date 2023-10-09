import { useEffect, useRef } from 'react';
import useUnmount from '../useUnmount';

const DEFAULT_OPTIONS = {
  restoreOnUnmount: false,
};

interface Options {
  restoreOnUnmount: boolean;
}

function useTitle(title: string, options: Options = DEFAULT_OPTIONS) {
  const prevTitleRef = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useUnmount(() => {
    if (options.restoreOnUnmount) {
      document.title = prevTitleRef.current;
    }
  });
}

export default useTitle;
