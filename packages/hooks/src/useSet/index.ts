import { useMemo, useState } from 'react';

interface Actions<K> {
  add: (key: K) => void;
  remove: (key: K) => void;
  reset: () => void;
}

function useSet<K>(initialValue?: Iterable<K>): readonly [Set<K>, Actions<K>] {
  const getInitValue = () => new Set(initialValue);
  const [state, setState] = useState(getInitValue);

  const actions: Actions<K> = useMemo(
    () => ({
      add: (key: K) => {
        if (state.has(key)) {
          return;
        }

        setState((prevState) => {
          const temp = new Set(prevState);
          temp.add(key);
          return temp;
        });
      },
      remove: (key: K) => {
        if (!state.has(key)) {
          return;
        }

        setState((prevState) => {
          const temp = new Set(prevState);
          temp.delete(key);
          return temp;
        });
      },
      reset: () => {
        setState(getInitValue);
      },
    }),
    [],
  );

  return [state, actions] as const;
}

export default useSet;
