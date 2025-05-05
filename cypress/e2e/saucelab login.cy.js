/// <reference types="cypress" />
describe ("ecommerce", function ( ) {
    
    it ("login", function () {

cy.visit ("https://www.saucedemo.com",);
cy.get('[data-test="username"]').type ("visual_user")
cy.get('[data-test="login-password"]').type ("secret_sauce")
cy.get('[data-test="login-password"]').click ()

})



})