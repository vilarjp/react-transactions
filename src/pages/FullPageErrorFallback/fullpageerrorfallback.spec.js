import React from 'react';
import { render, screen } from '../../test/render';

import FullPageErrorFallback from '.';

describe('<FullPageErrorFallback />', () => {
  it('should render the page', () => {
    render(<FullPageErrorFallback error={{ message: 'any_error' }} />);

    expect(screen.getByRole('alert')).toMatchInlineSnapshot(`
      <div
        role="alert"
      >
        Ops... algo de inesperado aconteceu, por favor tente recarregar a pagina, voltar para página inicial ou entrar em contato com o nosso suporte. Erro:
         
        any_error
      </div>
    `);
  });
});
