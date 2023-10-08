import { useSafeState } from 'techHooks';
import React, { useEffect, useState } from 'react';

const Child = () => {
  const [value, setValue] = useSafeState<string>();

  useEffect(() => {
    setTimeout(() => {
      setValue('data loaded from server');
    }, 3000);
  }, []);

  const text = value || 'Loading... (卸载以停止 Loading)';

  return <div>{text}</div>;
};

export default () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(false)}>Unmount</button>
      {visible && <Child />}
    </div>
  );
};
