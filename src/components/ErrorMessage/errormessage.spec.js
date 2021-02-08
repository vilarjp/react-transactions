import React from 'react';
import { render, screen } from '../../test/render';

import ErrorMessage from '.';

describe('<ErrorMessage />', () => {
  it('should render the children content correctly', () => {
    render(
      <ErrorMessage>
        <p>any error message</p>
      </ErrorMessage>,
    );

    expect(screen.getByRole('alert')).toMatchInlineSnapshot(`
      .c0 {
        color: #3F2787;
        text-align: center;
        font-weight: 700;
      }

      <div
        class="c0"
        role="alert"
      >
        <p>
          any error message
        </p>
      </div>
    `);
  });
});
