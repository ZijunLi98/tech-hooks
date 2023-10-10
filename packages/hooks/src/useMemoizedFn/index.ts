import { useMemo, useRef } from 'react';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

// 手动声明该函数中this的指向，将this作为函数的第一个参数，该参数只用于约束this，并不是真正的参数，也不会出现在编译结果中。
type noop = (this: any, ...args: any[]) => any;

type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

function useMemoizedFn<T extends noop>(fn: T) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useMemoizedFn expected parameter is a function, got ${typeof fn}`);
    }
  }

  const fnRef = useRef<T>(fn);

  fnRef.current = useMemo(() => fn, [fn]);

  // 除了初始化，memoizedFn.current 永远不会再改变
  // 但是 memoizedFn.current 内部所依赖的 fnRef.current 的函数可以改变
  // 达到返回函数永久不变，但是其内部内容可改变的目的
  const memoizedFn = useRef<PickFunction<T>>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args);
    };
  }

  // 返回一个引用地址永远不会变化的 fn
  return memoizedFn.current as T;
}

export default useMemoizedFn;
