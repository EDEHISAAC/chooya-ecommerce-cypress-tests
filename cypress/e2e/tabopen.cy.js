///<reference types="cypress"/>
describe('HandlingTabs', function () {

    it('testing tabs', function () {
     cy.visit('https://codenboxautomationlab.com/practice/#top');
     // Verify the URL includes 'codenbox'
            cy.url().should('include', 'codenbox');
        });
    
        it('invoke child tab', function () {
            // Revisit the URL in this test to avoid any dependency between tests
            cy.visit('https://codenboxautomationlab.com/practice/#top');
            // Remove the 'target' attribute to open the link in the same tab
            cy.get('#opentab').invoke('removeAttr', 'target').click();
            // Add assertions if needed to verify the new page loads correctly
           // cy.url().should('include', 'practice'); // adjust this check based on the expected URL
        });
    });
