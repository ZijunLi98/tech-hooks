/**
 * title: 基础用法
 * desc: 使用 useLatest 避免 react hooks 中的闭包陷阱，useLatest 返回的永远是最新值
 */

import React, { useState, useEffect, useRef } from 'react';
import { useLatest } from 'techHooks';

export default () => {
  const [count, setCount] = useState(0);

  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('latestCountRef.current: ', latestCountRef.current); // 由于是对象，闭包引用的是对象的地址
      console.log('count: ', count); // 由于闭包，count 的值永远是组件初次渲染时的初始值

      setCount((prevState) => prevState + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count: {count}</p>
      <strong>打开控制台查看 useEffect 内部打印的结果</strong>
    </>
  );
};
