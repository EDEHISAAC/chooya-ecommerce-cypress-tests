export class LoginPage {


enterUsername (){
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
}

    enterPassWord (){
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type ('admin123')
    }

    clicklogin () {
        cy.get('.oxd-button').click()
        
    }
}