import React from 'react';
import ErrorPage from '../ToolboxComponents/ErrorPage';

const ApiErrorPage = () => {
  const title = 'Error in connection to Python API';
  const description = 'The page cannot connect to calculation sever.';

  return <ErrorPage title={title} textContent={description} />;
};

export default ApiErrorPage;
