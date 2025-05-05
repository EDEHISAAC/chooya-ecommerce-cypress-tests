/// < reference types = "cypress" /> 
/// <reference types="cypress-downloadfile"/>

it ('file upload Test', function (){

    cy.visit ('https://trytestingthis.netlify.app/')

    cy.get('#myfile').attachFile ('screenshot.png')




})

it ('file download Test', function (){

cy.downloadFile ('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')


})