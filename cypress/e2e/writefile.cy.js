/// < reference types = "cypress"/>

describe ('my write-ready test suits', function(){

    it ('write on a file', function(){
    })
    it ("read file text", function () {
        // read the text file
        cy.readFile ('sampleFile.text') .should ('exist') .and ('contain', 'Hello Isaac')
        
        cy.writeFile ('sampleFile.text', 'Hello Isaac\n')
            cy.writeFile ('sampleFile.text', 'this is my sample file', { flag: 'a+' })
            /// create json file in ficture and write 
                // the slash should be double 
                cy.writeFile('cypress\\fixtures\\example.json', {
                    name: 'Admin',
                    email: 'isaacoedbuchijamie@gmail.com',
                    password:'admin123',

                })

            })
            
        })