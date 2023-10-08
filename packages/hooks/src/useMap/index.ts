import { useMemo, useState } from 'react';

interface Actions<K, V> {
  set: (key: K, value: V) => void;
  get: (key: K) => V | undefined;
  setAll: (newMap: Iterable<[K, V]>) => void;
  remove: (key: K) => void;
  reset: () => void;
}

function useMap<K, V>(initialValue: Iterable<[K, V]>): readonly [Map<K, V>, Actions<K, V>] {
  const initialMap = () => new Map(initialValue);
  const [map, setMap] = useState<Map<K, V>>(initialMap);

  const actions: Actions<K, V> = useMemo(
    () => ({
      set: (key: K, value: V) => {
        if (map.has(key)) return;

        setMap((prevMap) => {
          const newMap = new Map(prevMap);
          newMap.set(key, value);

          return newMap;
        });
      },

      remove: (key: K) => {
        if (!map.has(key)) return;

        setMap((prevMap) => {
          const newMap = new Map(prevMap);
          newMap.delete(key);

          return newMap;
        });
      },
      get: (key: K) => {
        if (!map.has(key)) return;
        else return map.get(key);
      },
      setAll: (newMap: Iterable<[K, V]>) => {
        setMap(() => new Map(newMap));
      },
      reset: () => {
        setMap(initialMap);
      },
    }),
    [],
  );

  return [map, actions] as const;

  //   const set = (key: K, value: V) => {
  //     if (map.has(key)) return;

  //     setMap((prevMap) => {
  //       const newMap = new Map(prevMap);
  //       newMap.set(key, value);

  //       return newMap;
  //     });
  //   };

  //   const remove = (key: K) => {
  //     if (!map.has(key)) return;

  //     setMap((prevMap) => {
  //       const newMap = new Map(prevMap);
  //       newMap.delete(key);

  //       return newMap;
  //     });
  //   };

  //   const get = (key: K) => {
  //     if (!map.has(key)) return;
  //     else return map.get(key);
  //   };
}

export default useMap;
