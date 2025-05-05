// / < reference types = "cypress/>"

it ('google search', () => {
    
    cy.visit('https://google.com')


    cy.get('#APjFqb').type ('Automation step by step {enter}')

    //cy.contains('Google search').click ()
    
    cy.contains(' Videos').click ()


})