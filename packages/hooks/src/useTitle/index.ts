import { useRef } from 'react';

const DEFAULT_OPTIONS = {
  restorePrevTitle: false,
};

function useTitle() {
  const prevTitleRef = useRef(() => {
    return document.title;
  });
}

export default useTitle;
