import { useEffect, useState, useRef } from 'react';
import fastApi from '../Api';

const useApiHealth = (interval) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const firstLoad = useRef(true);

  useEffect(() => {
    const getApiStatus = async () => {
      try {
        const response = await fastApi.get('api/health');
        if (response.status !== 200) {
          setError(true);
        } else {
          setError(false);
        }
      } catch (e) {
        setError(true);
        console.error('Cound not connect to python API');
      }
      setLoading(false);
    };
    if (firstLoad.current) {
      setTimeout(() => {
        getApiStatus();
        firstLoad.current = false;
      }, 3000);
    }
    let apiInterval;
    if (!error) {
      apiInterval = setInterval(getApiStatus, interval);
    }

    return () => clearInterval(apiInterval);
  }, [error, interval]);
  return [error, loading];
};
export default useApiHealth;
