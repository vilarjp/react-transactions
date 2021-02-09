import React from 'react';
import Spinner from '../../components/Spinner';

import * as SC from './styles';

function FullPageSpinner() {
  return (
    <SC.Container role="loading">
      <Spinner />
    </SC.Container>
  );
}

export default FullPageSpinner;
