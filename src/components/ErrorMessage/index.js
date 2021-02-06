import React from 'react';

import { ErrorWrapper } from './styles';

function ErrorMessage({ children }) {
  return <ErrorWrapper role="alert">{children}</ErrorWrapper>;
}

export default ErrorMessage;
