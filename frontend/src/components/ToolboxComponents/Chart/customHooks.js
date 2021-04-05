import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const handleSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleSize);
    handleSize();

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);
  console.log(size);
  return size;
};

export default useWindowSize;
