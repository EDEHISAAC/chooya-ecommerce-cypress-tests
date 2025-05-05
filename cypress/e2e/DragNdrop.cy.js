/// <reference types = "cypress"/>
describe ("drag and suit", function () {
    it ("case 1", function () {
cy.visit ("http://vishalok12.github.io/jquery-dragarrange/");
//cy.get ('.sourceitem').drag ('.targetitem')
cy.get('.d-1').drag ('.d-3', {force:true})


    
})

    })