const newName = 'Carlo';
const newLastName = 'Quilaguy';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dashboard-test.zoefin.com/login');
    cy.get('#username').type('zoefin.advisor+qaroleadv01@gmail.com');
    cy.get('#password').type('QA.role123');
    cy.get('.c6a8ea2a6').click();
    cy.get('[data-testid="advice-request-list-thead-name"]',{ timeout: 10000 }).should('exist');
    cy.get('[data-testid="advice-request-list-td-name-0"]',{ timeout: 10000 }).click();
    cy.get('[href*="/household"]', { timeout: 10000 }).contains('Household').click();
    cy.get('.fa-pen-to-square', { timeout: 10000 }).last().should('exist').click();
    cy.get('[class*="styles-module_baseInput__input__modRegular"]', { timeout: 10000 }).eq(1).clear().type(newName);
    cy.get('[class*="styles-module_baseInput__input__modRegular"]', { timeout: 10000 }).eq(2).clear().type(newLastName);
    cy.get('button', { timeout: 10000 }).contains('Save Changes').click();
    cy.get('[class*="styles_successAnimation"]', { timeout: 10000 }).should('exist');
    cy.get('[class*="styles_cardWrapper__information_user__"] p', { timeout: 10000 }).contains(newName).should('exist');
    cy.get('[class*="styles_cardWrapper__information_user__"] p', { timeout: 10000 }).contains(newLastName).should('exist');    
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      
      return false
    })
  })
})