import React, { useState } from 'react';

import * as SC from './styles';

const currencyConfig = {
  locale: 'pt-BR',
  formats: {
    number: {
      BRL: {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

function Input({
  initialValue = '',
  onInput,
  disabled,
  error,
  placeholder,
  mask,
  isMoney = false,
  ...props
}) {
  const [value, setValue] = useState(initialValue);
  const [focused, setFocused] = useState(false);

  const onChange = (event) => {
    let newValue = event.currentTarget.value;
    if (mask) newValue = unmaskValue(newValue);
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  const unmaskValue = (value) => {
    return value.replace(/\D/g, '');
  };

  const onCurrencyChange = (_, value) => {
    let newValue = value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  const showPlaceholder = () => {
    return focused || value || isMoney;
  };

  return (
    <SC.InputWrapper>
      <SC.InputLabel hasFocus={showPlaceholder()}>{placeholder}</SC.InputLabel>
      {isMoney ? (
        <SC.InputCurrency
          currency="BRL"
          config={currencyConfig}
          onChange={onCurrencyChange}
          value={value}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          mask={mask}
          {...props}
        />
      ) : (
        <SC.InputField
          placeholder={focused ? '' : placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          mask={mask}
          {...props}
        />
      )}
      {!!error && <small>{error}</small>}
    </SC.InputWrapper>
  );
}

export default Input;
