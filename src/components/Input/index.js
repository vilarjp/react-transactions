import React, { useState } from 'react';
import {
  formatCPF,
  formatCreditCard,
  formatCVV,
  formatCardExpiration,
} from '../../utils/formatters';

import * as SC from './styles';

function Input({
  initialValue = '',
  onInput,
  disabled,
  error,
  placeholder,
  mask = '',
  ...props
}) {
  const [value, setValue] = useState(initialValue);
  const [focused, setFocused] = useState(false);

  const formatter = (value) => {
    switch (mask) {
      case 'CPF': {
        return formatCPF(value);
      }
      case 'creditCard': {
        return formatCreditCard(value);
      }
      case 'cardExpiration': {
        return formatCardExpiration(value);
      }
      case 'CVV': {
        return formatCVV(value);
      }
      default: {
        return value;
      }
    }
  };

  const onChange = (event) => {
    let newValue = event.currentTarget.value;
    newValue = formatter(newValue);
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <SC.InputWrapper>
      <SC.InputLabel hasFocus={focused || value}>{placeholder}</SC.InputLabel>
      <SC.InputField
        placeholder={focused ? '' : placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {!!error && <small>{error}</small>}
    </SC.InputWrapper>
  );
}

export default Input;
