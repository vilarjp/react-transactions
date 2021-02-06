import React from 'react';

import { ErrorWrapper } from './styles';

function ErrorMessage({ children }) {
  return <ErrorWrapper>{children}</ErrorWrapper>;
}

export default ErrorMessage;
