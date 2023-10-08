import { isFunction, isUndef } from '../utils';
import { useState } from 'react';
import useUpdateEffect from '../useUpdateEffect';

export type SetState<S> = S | ((prevState?: S) => S);

export interface Options<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  onError?: (error: unknown) => void;
}

function createUseStorageState(getStorage: () => Storage | undefined) {
  return function useStorageState<T>(key: string, options: Options<T> = {}) {
    let storage: Storage | undefined;

    // 解构 onError 并设置默认值
    const {
      onError = (e) => {
        console.error(e);
      },
    } = options;

    // 获取 storage，不是浏览器环境则报错
    try {
      storage = getStorage();
    } catch (err) {
      onError(err);
    }

    // 转换为 JSON 的操作
    const serializer = (value: T) => {
      if (options.serializer) {
        return options.serializer(value);
      }
      return JSON.stringify(value);
    };

    // 转换为 object 的操作
    const deserializer = (value: string): T => {
      if (options.deserializer) {
        return options.deserializer(value);
      }
      return JSON.parse(value);
    };

    const getStoredValue = () => {
      try {
        const raw = storage?.getItem(key);
        if (raw) {
          return deserializer(raw);
        }
      } catch (e) {
        onError(e);
      }
      if (isFunction(options.defaultValue)) {
        return options.defaultValue();
      }
      return options.defaultValue;
    };

    const [state, setState] = useState(getStoredValue);

    useUpdateEffect(() => {
      setState(getStoredValue());
    }, [key]);

    const updateState = (value?: SetState<T>) => {
      const currentState = isFunction(value) ? value(state) : value;
      setState(currentState);

      try {
        if (isUndef(currentState)) {
          storage?.removeItem(key);
        } else {
          storage?.setItem(key, serializer(currentState));
        }
      } catch (e) {
        console.error(e);
      }
    };

    return [state, updateState] as const;
  };
}

export default createUseStorageState;
