import React from 'react';
import { render, screen, userEvent } from '../../test/render';

import GoBackHeader from '.';

describe('<GoBackHeader />', () => {
  it('should render correct page header', () => {
    const pageTitle = 'any page title';
    render(<GoBackHeader title={pageTitle} />);

    expect(
      screen.getByRole('heading', { name: pageTitle }),
    ).toBeInTheDocument();
  });

  it('should go to correct route', () => {
    const pageRoute = '/any-page-route';
    render(<GoBackHeader to={pageRoute} />);

    expect(window.location.pathname).toBe('/');

    const iconArrowLeft = screen.getByRole('link');

    userEvent.click(iconArrowLeft);

    expect(window.location.pathname).toBe('/any-page-route');
  });
});
