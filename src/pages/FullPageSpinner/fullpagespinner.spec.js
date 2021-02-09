import React from 'react';
import { render, screen } from '../../test/render';

import FullPageSpinner from '.';

describe('<FullPageSpinner />', () => {
  it('should render the page', () => {
    render(<FullPageSpinner />);

    expect(screen.getByRole('loading')).toMatchInlineSnapshot(`
      .c1 {
        border: 8px solid #8B8B92;
        border-left-color: #3F2787;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        -webkit-animation: spin 1.5s linear infinite;
        animation: spin 1.5s linear infinite;
      }

      .c0 {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      <div
        class="c0"
        role="loading"
      >
        <div
          aria-label="loading"
          class="c1"
        />
      </div>
    `);
  });
});
