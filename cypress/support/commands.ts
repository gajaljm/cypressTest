/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('checkPageTitle', (title) => {
  cy.get('[data-testid="page-title"]').should('have.text', title);
})

Cypress.Commands.add('validateCategoryName', (index, categoryName) =>  {
  cy.get('[data-testid="category-filter-label"]').eq(index).should('have.text', categoryName);
})

Cypress.Commands.add('clickElement', (id) =>  {
  cy.get('[data-testid=id]').click();
})

Cypress.Commands.add('validateListRegex', (id, index, regex) =>  {
  cy.get(id).eq(index).should('match', regex);
})

Cypress.Commands.add('validateListTextNotEmpty', (id, index) =>  {
  cy.get(id).eq(index).should('not.be.empty');
})

Cypress.Commands.add('validateListText', (id, index, text) =>  {
  cy.get(id).eq(index).contains(text);
})

Cypress.Commands.add('mockApi', (options = {}) => {
  Cypress.log({
    name: 'Mock API',
    message: `Using ${options.mocksFolder} as API mock for ${options.apiPath}`,
    consoleProps: () => ({ options }),
  });

  cy.task('getMocks', options, { log: false })
    // @ts-ignore
    .then((mocks: Mocks[]) => {
      mocks.forEach((mock) => {
        cy.intercept(mock.matcher, (req) => {
          req.alias = mock.alias;
          if (mock.handler.redirect) {
            req.redirect(mock.handler.redirect, mock.handler.statusCode);
          } else {
            req.reply(mock.handler);
          }
        });
      });
    });
});