import React from 'react';
import ErrorPage from '../ToolboxComponents/ErrorPage';

const PageNotFound = () => {
  const title = '404 Page not found';
  const description = 'The page which you are looking for is not avaiable';

  return <ErrorPage title={title} textContent={description} />;
};

export default PageNotFound;
