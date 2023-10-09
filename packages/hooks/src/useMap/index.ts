// import { useMemo, useState } from 'react';

// interface Actions<K, V> {
//   set: (key: K, value: V) => void;
//   get: (key: K) => V | undefined;
//   setAll: (newMap: Iterable<[K, V]>) => void;
//   remove: (key: K) => void;
//   reset: () => void;
// }

// function useMap<K, V>(initialValue?: Iterable<[K, V]>): readonly [Map<K, V>, Actions<K, V>] {
//   const initialMap = () => new Map(initialValue);
//   const [map, setMap] = useState<Map<K, V>>(initialMap);

//   const actions: Actions<K, V> = useMemo(
//     () => ({
//       set: (key: K, value: V) => {
//         if (map.has(key)) return;

//         setMap((prevMap) => {
//           const newMap = new Map(prevMap);
//           newMap.set(key, value);

//           return newMap;
//         });
//       },

//       remove: (key: K) => {
//         if (!map.has(key)) return;

//         setMap((prevMap) => {
//           const newMap = new Map(prevMap);
//           newMap.delete(key);

//           return newMap;
//         });
//       },
//       get: (key: K) => {
//         if (!map.has(key)) return;
//         else return map.get(key);
//       },
//       setAll: (newMap: Iterable<[K, V]>) => {
//         setMap(() => new Map(newMap));
//       },
//       reset: () => {
//         setMap(initialMap);
//       },
//     }),
//     [],
//   );

//   return [map, actions] as const;

//   //   const set = (key: K, value: V) => {
//   //     if (map.has(key)) return;

//   //     setMap((prevMap) => {
//   //       const newMap = new Map(prevMap);
//   //       newMap.set(key, value);

//   //       return newMap;
//   //     });
//   //   };

//   //   const remove = (key: K) => {
//   //     if (!map.has(key)) return;

//   //     setMap((prevMap) => {
//   //       const newMap = new Map(prevMap);
//   //       newMap.delete(key);

//   //       return newMap;
//   //     });
//   //   };

//   //   const get = (key: K) => {
//   //     if (!map.has(key)) return;
//   //     else return map.get(key);
//   //   };
// }

// export default useMap;

import { useState } from 'react';
import useMemoizedFn from '../useMemoizedFn';

function useMap<K, T>(initialValue?: Iterable<readonly [K, T]>) {
  const getInitValue = () => new Map(initialValue);
  const [map, setMap] = useState<Map<K, T>>(getInitValue);

  const set = (key: K, entry: T) => {
    setMap((prev) => {
      const temp = new Map(prev);
      temp.set(key, entry);
      return temp;
    });
  };

  const setAll = (newMap: Iterable<readonly [K, T]>) => {
    setMap(new Map(newMap));
  };

  const remove = (key: K) => {
    setMap((prev) => {
      const temp = new Map(prev);
      temp.delete(key);
      return temp;
    });
  };

  const reset = () => setMap(getInitValue());

  const get = (key: K) => map.get(key);

  return [
    map,
    {
      set: useMemoizedFn(set),
      setAll: useMemoizedFn(setAll),
      remove: useMemoizedFn(remove),
      reset: useMemoizedFn(reset),
      get: useMemoizedFn(get),
    },
  ] as const;
}

export default useMap;
