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
    cy.get('[class*="styles_householdWrapper__header__"]', { timeout: 10000 }).should('exist');


    
    cy.get('.fa-trash', { timeout: 5000 }).then(($element)=>{
      if($element.length > 0){
        cy.get('.fa-trash', { timeout: 10000 }).last().click()
      }else{
        cy.log('There are no members to delete');
      }
    });
    cy.get('button', { timeout: 10000 }).contains('Remove').should('exist').click();

 
    Cypress.on('uncaught:exception', (err, runnable) => {   
      return false
    })
  })
})