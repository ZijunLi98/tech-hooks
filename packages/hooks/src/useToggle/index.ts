import { useState, useMemo } from 'react';

type defaultFn = () => void;

export interface Actions<T> {
  setLeft: defaultFn;
  setRight: defaultFn;
  toggle: defaultFn;
  set: (val: T) => void;
}

// 1. 默认的 boolean 类型切换
function useToggle<T = boolean>(): [boolean, Actions<T>];

// 2. 有传递 defaultValue
function useToggle<T>(defaultValue: T): [T, Actions<T>];

// 3. 有传递 defaultValue 和 reverseValue
function useToggle<D, R>(defaultValue: D, reverseValue?: R): [D | R, Actions<D | R>];

function useToggle<D, R>(defaultValue: D = false as D, reverseValue?: R): [D | R, Actions<D | R>] {
  const [state, setState] = useState<D | R>(defaultValue);
  const actions = useMemo((): Actions<D | R> => {
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

    return {
      setLeft() {
        setState(defaultValue);
      },
      setRight() {
        setState(reverseValueOrigin);
      },
      toggle() {
        setState((state) => (state === defaultValue ? reverseValueOrigin : defaultValue));
      },
      set(val: D | R) {
        setState(val);
      },
    };
  }, []);

  return [state, actions];
}

export default useToggle;
