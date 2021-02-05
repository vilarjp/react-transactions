import React from 'react';

import { formatMoney } from '../../utils/formatters';

import * as SC from './styles';

function TextAndNumber({ text, number, isMoney = false }) {
  const renderNumberValue = () => {
    if (isMoney) {
      return formatMoney(number);
    }

    return number;
  };

  return (
    <SC.TextAndNumberWrapper>
      <SC.Text>{text}</SC.Text>
      <SC.NumberValue>{renderNumberValue()}</SC.NumberValue>
    </SC.TextAndNumberWrapper>
  );
}

export default TextAndNumber;
