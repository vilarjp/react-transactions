import React from 'react';
import {
  render,
  screen,
  userEvent,
  waitFor,
  fireEvent,
} from '../../test/render';

import Input from '.';

describe('<Input />', () => {
  it('should render default input', () => {
    render(<Input placeholder="default input" />);

    const label = screen.getByText('default input');
    expect(label).toHaveStyle({
      opacity: '0',
    });

    const input = screen.getByPlaceholderText('default input');
    userEvent.type(input, 'any_content');

    expect(input.value).toBe('any_content');
    expect(label).toHaveStyle({
      opacity: '1',
    });
  });

  it('should render disabled input', () => {
    render(<Input disabled />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('disabled');
  });

  it('should render with initial value', () => {
    const initialValue = 'any_default_value';
    render(
      <Input initialValue={initialValue} placeholder={'with initial value'} />,
    );

    const label = screen.getByText('with initial value');
    expect(label).toHaveStyle({
      opacity: '1',
    });

    const input = screen.getByRole('textbox');
    expect(input.value).toBe(initialValue);
  });

  it('should call ->onInput props with correct value', async () => {
    const onInputSpy = jest.fn();

    render(<Input onInput={onInputSpy} />);

    const input = screen.getByRole('textbox');
    const textContent = 'any_content';
    userEvent.type(input, textContent);

    await waitFor(() => {
      expect(input).toHaveValue(textContent);
      expect(onInputSpy).toHaveBeenCalledTimes(textContent.length);
    });

    expect(onInputSpy).toHaveBeenCalledWith(textContent);
  });

  it('should toggle label opacity on focus and blur', () => {
    render(<Input placeholder={'focused input'} />);

    const input = screen.getByRole('textbox');
    const label = screen.getByText('focused input');

    expect(label).toHaveStyle({
      opacity: '0',
    });

    userEvent.click(input);

    expect(label).toHaveStyle({
      opacity: '1',
    });

    fireEvent.blur(input);

    expect(label).toHaveStyle({
      opacity: '0',
    });
  });

  it('should display currency input', () => {
    const onInputSpy = jest.fn();
    render(<Input initialValue={0} isMoney onInput={onInputSpy} />);

    const input = screen.getByRole('textbox');
    userEvent.paste(input, 150);

    expect(input.value).toBe('R$1.50');
    expect(onInputSpy).toHaveBeenCalledWith(1.5);
  });

  it('should display error message', () => {
    const errorMessage = 'any_error_message';
    render(<Input error={errorMessage} />);

    expect(screen.getByRole('alert').textContent).toBe(errorMessage);
  });

  it('should display masked input', async () => {
    const onInputSpy = jest.fn();
    render(
      <Input
        mask={'999.999.999-99'}
        initialValue={'12345678900'}
        onInput={onInputSpy}
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('123.456.789-00');

    userEvent.type(input, '123.456.789-00');

    expect(onInputSpy).toHaveBeenCalledWith('12345678900');
  });

  it('should display error message', () => {
    const errorMessage = 'any_error_message';
    render(<Input error={errorMessage} />);

    expect(screen.getByRole('alert').textContent).toBe(errorMessage);
  });
});
