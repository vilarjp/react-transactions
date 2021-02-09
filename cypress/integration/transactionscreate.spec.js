import * as Http from '../utils/http';

const path = /transactions/;

const mockSuccess = () => Http.mockOk(path, 'GET', 'transactions.json');
const mockNoContent = () => Http.mockNoContent(path, 'GET');

describe('<TransactionsCreate />', () => {
  it('should allow a typical user flow', () => {
    mockSuccess();

    cy.visit('/');

    cy.findByRole('button', { name: /criar transação/i }).click();
    cy.url().should('include', '/create');

    cy.findByPlaceholderText('Nome da pessoa compradora').type('João');
    cy.findByPlaceholderText('CPF').type('010.672.050-39');
    cy.findByPlaceholderText(/n° do cartão/i).type('1234123412341234');
    cy.findByPlaceholderText('Data de expiração').type('0128');
    cy.findByPlaceholderText('CVV').type('1234');
    cy.findAllByRole('textbox').last().type('200000');

    cy.intercept(
      {
        method: 'POST',
        url: '/transactions',
      },
      {
        fixture: 'create.json',
        delay: 50,
      },
    );

    cy.findByRole('button', { name: /criar transação/i })
      .click()
      .should('have.text', 'Carregando...')
      .should('have.attr', 'disabled');

    cy.findByText('Número de transações').should('exist');
    cy.findByText('Número de transações').next().should('have.text', 4);

    cy.findByText('Valor total').should('exist');
    cy.findByText('Valor total').next().should('contain.text', '17.000,00');
    cy.findByText('João').should('exist');
    cy.findAllByText('Paga').should('have.length', 3);
    cy.findByText('R$ 2.000,00').should('exist');
  });

  it('should handle errors', () => {
    mockSuccess();

    cy.visit('/');

    cy.findByRole('button', { name: /criar transação/i }).click();
    cy.url().should('include', '/create');

    cy.findByPlaceholderText('Nome da pessoa compradora').type('João');
    cy.findByPlaceholderText('CPF').type('010.672.050-39');
    cy.findByPlaceholderText(/n° do cartão/i).type('1234123412341234');
    cy.findByPlaceholderText('Data de expiração').type('0128');
    cy.findByPlaceholderText('CVV').type('1234');
    cy.findAllByRole('textbox').last().type('200000');

    cy.findByRole('button', { name: /criar transação/i }).click();

    cy.findByRole('alert').should(
      'have.text',
      'Ops... ocorreu um erro no nosso sistema :( tente recarregar a pagina ou criar a transação novamente',
    );
  });

  it('should handle empty form fields', () => {
    mockNoContent();

    cy.visit('/');

    cy.findByRole('button', { name: /criar transação/i }).click();
    cy.url().should('include', '/create');

    cy.findByRole('button', { name: /criar transação/i }).click();

    cy.findAllByRole('alert').first().should('have.text', 'Campo obrigatório');

    cy.findAllByRole('alert')
      .last()
      .should('have.text', 'O nome deve conter 2 ou mais caracteres');
  });

  it('should request data on first page load', () => {
    mockSuccess();

    cy.visit('/create');

    cy.findByRole('link').click();

    cy.findByText('Número de transações').should('exist');
    cy.findByText('Número de transações').next().should('have.text', 3);

    cy.findByText('Valor total').should('exist');
    cy.findByText('Valor total').next().should('contain.text', '15.000,00');
  });
});
