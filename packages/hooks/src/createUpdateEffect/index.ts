import { useRef } from 'react';
import type { useEffect, useLayoutEffect } from 'react';

type EffectHookType = typeof useEffect | typeof useLayoutEffect;

export const createUpdateEffect: (hook: EffectHookType) => EffectHookType = (hook) => {
  return (effect, deps) => {
    // 初始状态为 false
    const isMounted = useRef(false);

    // for react-refresh
    // 组件卸载前触发 clean up 设置为false
    hook(() => {
      return () => {
        isMounted.current = false;
      };
    }, []);

    hook(() => {
      // 组件初次加载 false
      if (!isMounted.current) {
        // 将状态设置为 true，之后每次都触发 effect
        isMounted.current = true;
      } else {
        effect();
      }
    }, deps);
  };
};

export default createUpdateEffect;
