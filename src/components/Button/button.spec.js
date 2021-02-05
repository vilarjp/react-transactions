import React from 'react';
import { render, screen } from '../../test/render';

import IconPlus from '../IconPlus';
import Button from '.';

const renderButton = ({ label = 'test button', ...rest } = {}) =>
  render(<Button {...rest}>{label}</Button>);

describe('<Button />', () => {
  it('should render the correct size by default', () => {
    renderButton();

    expect(
      screen.getByRole('button', { name: /test button/i }),
    ).not.toHaveStyle({
      width: '100%',
    });
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('should render full width', () => {
    renderButton({ fullWidth: true });

    expect(screen.getByRole('button', { name: /test button/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render with an icon', () => {
    renderButton({ icon: <IconPlus /> });

    expect(screen.getByText(/test button/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/plus icon/i)).toBeInTheDocument();
  });

  it('should render with disabled property', () => {
    renderButton({ disabled: true });

    expect(
      screen.getByRole('button', { name: /test button/i }),
    ).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled',
    });
  });
});
