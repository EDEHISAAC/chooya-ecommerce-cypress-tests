/// <reference types="Cypress" />
describe('Helproo - User Login', () => {
  it('should log in with valid credentials', () => {
    cy.visit('https://app.helproo.com/login');

    cy.get('input[name="email"]').type('francisnwachukwu100+regularuser@gmail.com');
    cy.get('input[name="password"]').type('12345678Ab@');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');

    // Wait for greeting text using case-insensitive regex
    cy.contains(/good morning.*francis/i, { timeout: 10000 }).should('be.visible');
  });
});
