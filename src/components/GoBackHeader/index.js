import React from 'react';
import { Link } from 'react-router-dom';

import IconArrowLeft from '../IconArrowLeft';

import * as SC from './styles';

function GoBackHeader({ to = '/', title }) {
  return (
    <SC.Wrapper>
      <Link to={to}>
        <IconArrowLeft />
      </Link>
      {title && <h1>{title}</h1>}
    </SC.Wrapper>
  );
}

export default GoBackHeader;
