import { useRef } from 'react';

function useLatest<T>(value: T) {
  const ref = useRef(value); // 定义 ref.current 的初始值
  ref.current = value; // 在页面重新渲染时，根据 value 重新给 ref 赋值

  return ref;
}

export default useLatest;