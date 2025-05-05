describe('Helproo - User Signup', () => {
    it('should allow a user to sign up', () => {
      cy.visit('https://helproo.com/signup'); // adjust URL as needed
  
      cy.get('input[name="fullName"]').type('Test User');
      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="password"]').type('Password123!');
      cy.get('input[name="confirmPassword"]').type('Password123!');
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/dashboard');
      cy.contains('Welcome, Test User');
    });
  });
  