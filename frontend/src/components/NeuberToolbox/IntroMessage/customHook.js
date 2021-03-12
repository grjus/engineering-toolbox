import { useEffect, useRef, useState } from 'react';

export const useRender = ({ isValid }) => {
  const renderRef = useRef(true);
  const [showNext, setShowNext] = useState(false);
  useEffect(() => {
    if (renderRef.current) {
      if (isValid) {
        setShowNext(true);
        renderRef.current = false;
      }
    }
  }, [isValid, renderRef]);
  return showNext;
};
