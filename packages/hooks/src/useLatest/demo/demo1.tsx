/**
 * title: 基础用法
 * desc: 使用 useLatest 避免 react hooks 中的闭包陷阱，useLatest 返回的永远是最新值
 */

import React, { useState, useEffect } from 'react';
import { useLatest } from 'techHooks';

export default () => {
  const [count, setCount] = useState(0);

  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count: {count}</p>
    </>
  );
};
