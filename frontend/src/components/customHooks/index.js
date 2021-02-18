import { useEffect, useState } from 'react';
import fastApi from '../Api';

const useApiHealth = (interval) => {
  const [error, setError] = useState(false);

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
    };
    let apiInterval;
    if (!error) {
      apiInterval = setInterval(getApiStatus, interval);
    }
    return () => clearInterval(apiInterval);
  }, [error]);
  return error;
};
export default useApiHealth;
