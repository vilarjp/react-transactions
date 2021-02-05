import React from 'react';
import { render, screen } from '../../test/render';
import { formatMoney } from '../../utils/formatters';

import TextAndNumber from '.';

const textWithNumber = {
  text: 'any_text',
  number: '103030',
};

const textWithMoney = {
  text: 'any_text',
  number: '24339.46',
  isMoney: true,
};

describe('<TextAndNumber />', () => {
  it('should render with number', () => {
    render(<TextAndNumber {...textWithNumber} />);

    expect(screen.getByText(textWithNumber.text)).toBeInTheDocument();
    expect(screen.getByText(textWithNumber.number)).toBeInTheDocument();
    expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument();
  });

  it('should render with money value', () => {
    render(<TextAndNumber {...textWithMoney} />);

    expect(screen.getByText(textWithMoney.text)).toBeInTheDocument();
    expect(
      screen.getByText(formatMoney(textWithMoney.number)),
    ).toBeInTheDocument();
  });

  it('should render loading state', () => {
    render(<TextAndNumber isLoading />);

    expect(screen.queryByLabelText(/loading/i)).toBeInTheDocument();
  });
});
