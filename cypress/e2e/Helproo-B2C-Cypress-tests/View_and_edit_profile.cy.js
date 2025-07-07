describe('Helproo - Profile Page', () => {
    beforeEach(() => {
      cy.visit('https://helproo.com/login');
      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="password"]').type('Password123!');
      cy.get('button[type="submit"]').click();
    });
  
    it('should display user profile info', () => {
      cy.contains('My Profile').click();
      cy.contains('testuser@example.com').should('be.visible');
    });
  
    it('should update user profile name', () => {
      cy.contains('My Profile').click();
      cy.get('input[name="fullName"]').clear().type('Updated User');
      cy.get('button[type="submit"]').click();
      cy.contains('Profile updated successfully');
    });
  });
  