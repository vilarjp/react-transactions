import React from 'react';

function FullPageErrorFallback({ error }) {
  return (
    <div role="alert">
      Ops... algo de inesperado aconteceu, por favor tente recarregar a pagina,
      voltar para página inicial ou entrar em contato com o nosso suporte. Erro:{' '}
      {error.message}
    </div>
  );
}

export default FullPageErrorFallback;
