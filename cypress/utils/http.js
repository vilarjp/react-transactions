export const mockError = (url, method) => {
  cy.intercept({
    url,
    method,
  }).as('request');
};

export const mockOk = (url, method, response) => {
  cy.intercept(
    {
      url,
      method,
    },
    {
      fixture: response,
      delay: 50,
    },
  ).as('request');
};

export const mockNoContent = (url, method) => {
  cy.intercept(
    {
      url,
      method,
    },
    {
      body: [],
    },
  ).as('request');
};
