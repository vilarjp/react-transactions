import React from 'react';
import * as SC from './styles';

const Button = ({ children, icon, fullWidth = false, ...props }) => {
  return (
    <SC.ButtonWrapper hasIcon={!!icon} fullWidth={fullWidth} {...props}>
      {icon}
      {!!children && children}
    </SC.ButtonWrapper>
  );
};

export default Button;
