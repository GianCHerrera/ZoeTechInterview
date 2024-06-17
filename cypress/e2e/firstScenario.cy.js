const timestamp = new Date().getTime();
const email = `test${timestamp}@zoe.com`;

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dashboard-test.zoefin.com/login')
    cy.get('#username').type('zoefin.advisor+qaroleadv01@gmail.com')
    cy.get('#password').type('QA.role123')
    cy.get('.c6a8ea2a6').click()
    cy.get('li[data-menu-id*="add_new_client"]', { timeout: 10000 }).first().click();
    cy.get('[class*="styles_newClientOptions__options__"] button', { timeout: 10000 }).first().click();
    cy.get('.next-button', { timeout: 10000 }).click();
    cy.get('#input-search', { timeout: 10000 }).type('Eleanora Schneider');
    cy.get('[class*="styles-module_searchClient__option__"]', { timeout: 10000 }).click();
    cy.get('.next-button', { timeout: 10000 }).click();
    cy.get('input[data-testid="email"]').type(email);
    cy.get('input[data-testid="name"]').type('Gian');
    cy.get('input[data-testid="last_name"]').type('Herrera');
    cy.get('input[data-testid="mobile"]').type('3193219951');
    cy.get('.next-button', { timeout: 10000 }).click();
    cy.get('[class*="styles_householdSuccessView__successMessage__"]', { timeout: 10000 }).should('exist');
    cy.get('[class*="styles_link__modActive__"]', { timeout: 10000 }).should('exist');
    cy.get('p', { timeout: 10000 }).contains(email).should('exist'); 
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  })
})