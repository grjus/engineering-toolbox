import { useState, useReducer, useEffect } from 'react';
import fastApi from '../Api';
import { initialState, actionType, dataSubmitReducer } from '../Reducers';
import { resultsInit } from './config';

export const useDataFetch = (handleSubmit, props) => {
  const [results, setResults] = useState(resultsInit);
  const [state, dispatch] = useReducer(dataSubmitReducer, initialState);

  useEffect(() => {
    const fetchData = (data) => {
      dispatch({ type: actionType.SUBMIT });
      fastApi.post('/api/calculations/stress-correction/', JSON.stringify(data)).then((response) => {
        setResults(() => {
          dispatch({ type: actionType.SUCCESS });
          return {
            isInit: false,
            ...response.data,
          };
        });
      }).catch((error) => {
        if (!error.response) {
          dispatch({ type: actionType.FAIL, payload: 'Error in connection to Python API' });
        } else if (error.response.status === 422) {
          error.response.data.detail.forEach((element) => {
            dispatch({ type: actionType.FAIL, payload: element.msg });
          });
        } else {
          dispatch({ type: actionType.FAIL, payload: 'Analysis error. Review your input data' });
        }
      });
    };
    const timeout = setTimeout(handleSubmit(fetchData), 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [handleSubmit, props.linearStress, props.unitSystem, props.yieldStrength, props.totalElongation, props.youngsModulus, props.osgoodExponent]);

  return [results, state];
};
