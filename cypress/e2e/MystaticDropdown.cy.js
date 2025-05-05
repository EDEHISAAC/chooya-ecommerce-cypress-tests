/// < reference types = "cypress" />

describe ('static drop down', function () {

it ('visit the automation site and select avdropdown option', function () {
    
cy.visit("https://codenboxautomationlab.com/practice/#top",);
cy.get('#dropdown-class-example').select('selenium').click ()



})


})
