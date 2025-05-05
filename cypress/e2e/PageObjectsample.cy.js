/// <reference types = "cypress" / >

import {LoginPage, LoginPage} from "./login_pages.cy.js"
const LoginPage = new LoginPage ()

it ('Pageobjectsample', function ( )

cy.visit('https://opensource-demo.orangehrmlive.com/')
Loginpage.enterusername ()
Loginpage.enterpassword ()
Loginpage.click ()


//cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
//cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type ('admin123')
//cy.get('.oxd-button').click()



})