describe('Helproo - Book a Service', () => {
    beforeEach(() => {
      cy.visit('https://app.helproo.com/login');
      cy.get('input[name="email"]').type('Kunleanayo@hotmail.com');
      cy.get('input[name="password"]').type('HELPROO@123.');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
    });
  
    it('should book a Mobile Laundry successfully', () => {
      cy.contains('Find a Services').click();
      cy.get('input[placeholder="Search services"]').type('Mobile laundry');
      cy.contains('Book Now').click();
  
      cy.get('input[name="date"]').type('2025-05-10');
      cy.get('input[name="time"]').type('14:00');
      cy.get('textarea[name="description"]').type('Fix leaking sink.');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Booking confirmed').should('be.visible');
    });
  });
  