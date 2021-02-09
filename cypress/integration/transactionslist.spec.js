import * as Http from '../utils/http';

const path = /transactions/;

const mockSuccess = () => Http.mockOk(path, 'GET', 'transactions.json');
const mockError = () => Http.mockError(path, 'POST');
const mockNoContent = () => Http.mockNoContent(path, 'GET');

describe('<TransactionsList />', () => {
  it('should allow a typical user flow', () => {
    mockSuccess();

    cy.visit('/');

    cy.get('[aria-label="loading"]').should('have.length', 3);
    cy.get('[aria-label="loading"]').should('not.exist');

    cy.findByText('Número de transações').should('exist');
    cy.findByText('Número de transações').next().should('have.text', 3);

    cy.findByText('Valor total').should('exist');
    cy.findByText('Valor total').next().should('contain.text', '15.000,00');

    cy.findAllByText('JOAO S SAURO').should('have.length', 3);
    cy.findAllByText('10/11/2020 16:43').should('have.length', 3);
    cy.findAllByText('Paga').should('have.length', 2);
    cy.findAllByText('R$ 10.000,00').should('have.length', 2);
    cy.findByText('R$ 5.000,00').should('exist');

    cy.findByRole('button', { name: /criar transação/i }).click();
    cy.url().should('include', '/create');

    cy.findByRole('link').click();
    cy.url().should('not.include', '/create');

    cy.get('@request.all').should('have.length', 1);
  });

  it('should handle errors', () => {
    mockError();

    cy.visit('/');

    cy.get('[aria-label="loading"]').should('not.exist');

    cy.findByText('Número de transações').should('exist');
    cy.findByText('Número de transações').next().should('have.text', 0);

    cy.findByText('Valor total').should('exist');
    cy.findByText('Valor total').next().should('contain.text', '0,00');

    cy.findByRole('alert').should(
      'have.text',
      'Ops... ocorreu um erro no nosso sistema :( tente recarregar a pagina',
    );
  });

  it('should handle empty data', () => {
    mockNoContent();

    cy.visit('/');

    cy.get('[aria-label="loading"]').should('not.exist');

    cy.findByText('Número de transações').should('exist');
    cy.findByText('Número de transações').next().should('have.text', 0);

    cy.findByText('Valor total').should('exist');
    cy.findByText('Valor total').next().should('contain.text', '0,00');

    cy.findByText('Nenhuma transação encontrada').should('exist');
  });
});
